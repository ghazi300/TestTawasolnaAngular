import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';

@Component({
  selector: 'app-entry-vehicule-form',
  templateUrl: './entry-vehicule-form.component.html',
  styleUrls: ['./entry-vehicule-form.component.scss']
})
export class EntryVehiculeFormComponent implements OnInit{
  parkingsubSpace: { subSpaceId: string | null; stationNumber: string; status: string }[] = [];
  selectedParkingsub: string = '';
  vehiculecategory: string = '';
  status: string = '';
  vehicleNumber: string = '';
  startTime: string = '';
  endTime: string = '';

  constructor(
    private _parkinglotservice: ParkinnagentserviceService,
    public dialogRef: MatDialogRef<EntryVehiculeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    if (data) {
      this.parkingsubSpace = data.parkingsubSpace || [];
      this.selectedParkingsub = data?.selectedParkingsub || '';

      this.vehiculecategory = data.Vcategory || '';
      this.vehicleNumber = data.Registrationnumber || '';
      this.startTime = data.entrydatetime || '';
      this.endTime = data.outdatetime || '';
    }
  }

  ngOnInit(): void {
    if (!this.startTime) {
      const now = new Date();
      this.startTime = now.toISOString().slice(0, 16);
      now.setHours(now.getHours() + 2);
      this.endTime = now.toISOString().slice(0, 16);
    }
    this._parkinglotservice.getAllParkingSubSpace().subscribe(parkingsubSpace => {
      this.parkingsubSpace = parkingsubSpace.filter(subSpace => subSpace.status === 'AVAILABLE');
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    const formData = this.getFormData();

  if (!formData.parkingsubSpace) {
    this._snackBar.open('Parking Lot selection is required', 'Close', { duration: 3000 });
    return;
  }
  
  this._parkinglotservice.addparkingspaceallocations(formData).subscribe({
    next: () => {
      this.dialogRef.close(formData);
      this._snackBar.open('Parking Space added successfully', 'Close', { duration: 3000 });
    },
    error: (err) => {
      console.error('Failed to add parking space:', err);
      this._snackBar.open('Failed to add parking space', 'Close', { duration: 3000 });
    }
  });

  console.log('Selected SubSpace:', this.selectedParkingsub);
  console.log('Form Data:', formData);
  }

  getStatus(): string {
    const now = new Date();
    const entryDate = new Date(this.startTime);
    const outDate = new Date(this.endTime);

    if (now >= entryDate && now <= outDate) {
      return 'ACTIVE';
    } else {
      return 'EXPIRED';
    }
  }

  getStatusStyle(): object {
    const status = this.getStatus();
    return {
      'color': status === 'ACTIVE' ? 'green' : 'red'
    };
  }
  getFormData() {
    const selectedSubSpace = this.parkingsubSpace.find(lot => lot.subSpaceId === this.selectedParkingsub);
  
    return {
      parkingsubSpace: {
        subSpaceId: selectedSubSpace ? selectedSubSpace.subSpaceId : null
      },
      vehiculecategory: this.vehiculecategory,
      status: this.getStatus(),
      vehicleNumber: this.vehicleNumber,
      startTime: this.startTime,
      endTime: this.endTime
    };
  }



}
