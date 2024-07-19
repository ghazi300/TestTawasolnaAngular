import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';

@Component({
  selector: 'app-add-edit-parking-space',
  templateUrl: './add-edit-parking-space.component.html',
  styleUrls: ['./add-edit-parking-space.component.scss']
})
export class AddEditParkingSpaceComponent implements OnInit {
  parkingLotId :{ parkinglotid: string | null; name: string  }[]=[];
  selectedParkingLot: string = '';
  locationNumber: string = '';
  capacity: number | null = null;
  occupiedSpaces: number | null = null;
  subSpaces: { subSpaceId: string | null; stationNumber: string | null; status: string | null }[] = [];

  constructor(
    private _parkinglotservice: ParkinnagentserviceService,
    public dialogRef: MatDialogRef<AddEditParkingSpaceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    if (data) {
      this.parkingLotId = data?.parkingLots || [];
  this.selectedParkingLot = data?.selectedParkingLot || '';
  this.locationNumber = data?.locationNumber || '';
  this.capacity = data?.capacity || null;
  this.occupiedSpaces = data?.occupiedSpaces ?? 0;
    this.subSpaces = data?.subSpaces || [];
    }
  }
  ngOnInit(): void {
    this._parkinglotservice.getAllParkingLot().subscribe(parkingLots => {
      this.parkingLotId = parkingLots;
    });
  }

  addSubSpace() {
    if (!this.subSpaces) {
      this.subSpaces = [];
    }
    this.subSpaces.push({
      subSpaceId:Math.random().toString(36).substr(2, 9),
      stationNumber: null,
      status: 'AVAILABLE'  
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save(): void {
    const formData = this.getFormData();
    if (!formData.parkingLotId) {
      this._snackBar.open('Parking Lot selection is required', 'Close', {
        duration: 3000
      });
      return;
    }
    console.log(formData);
    this._parkinglotservice.addparkingspace(formData).subscribe({
      next: () => {
        this.dialogRef.close(formData);
        this._snackBar.open('Parking Space added successfully', 'Close', {
          duration: 3000
        });
      },
      error: (err) => {
        console.error('Failed to add parking space:', err);
        this._snackBar.open('Failed to add parking space', 'Close', {
          duration: 3000
        });
      }
    });
  
  }
  getFormData() {
    const selectedLot = this.parkingLotId.find(lot => lot.parkinglotid === this.selectedParkingLot);

    return {
      parkingLotId: selectedLot,
      locationNumber: this.locationNumber,
      capacity: this.capacity,
      occupiedSpaces: this.occupiedSpaces,
      subSpaces: this.subSpaces,
    };
  }


}
