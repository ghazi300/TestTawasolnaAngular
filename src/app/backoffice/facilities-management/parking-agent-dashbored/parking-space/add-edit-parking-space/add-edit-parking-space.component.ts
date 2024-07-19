import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';

@Component({
  selector: 'app-add-edit-parking-space',
  templateUrl: './add-edit-parking-space.component.html',
  styleUrls: ['./add-edit-parking-space.component.scss']
})
export class AddEditParkingSpaceComponent {
  parkingLots :{ parkinglotid: string | null; name: string  }[]=[];
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
      this.parkingLots = data.parkingLots;
      this.selectedParkingLot = data.selectedParkingLot;
      this.locationNumber = data.locationNumber;
      this.capacity = data.capacity;
      this.occupiedSpaces = data.occupiedSpaces;
      this.subSpaces = data.subSpaces;
    }
  }

  addSubSpace() {
    this.subSpaces.push({
      subSpaceId: null,
      stationNumber: null,
      status: null
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.data && this.data.parkinglotid) {
      // Update logic here
      this._snackBar.open('Parking lot updated successfully', 'Close', {
        duration: 3000,
      });
    } else {
      // Save logic here
      this._snackBar.open('Parking lot saved successfully', 'Close', {
        duration: 3000,
      });
    }
    this.dialogRef.close({ data: this.getFormData() });
  }

  getFormData() {
    return {
      selectedParkingLot: this.selectedParkingLot,
      locationNumber: this.locationNumber,
      capacity: this.capacity,
      occupiedSpaces: this.occupiedSpaces,
      subSpaces: this.subSpaces,
    };
  }


}
