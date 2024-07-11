import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-entry-vehicule-form',
  templateUrl: './entry-vehicule-form.component.html',
  styleUrls: ['./entry-vehicule-form.component.scss']
})
export class EntryVehiculeFormComponent implements OnInit{
  Registrationnumber: string = '';
  Vcategory: string = '';
  ownerfullname: string = '';
  ownercontact: string = '';
  stationnumber: string = '';
  entrydatetime: string = '';
  outdatetime:string='';
  stationOptions = [
    { value: 'A1', viewValue: 'Station A1' },
    { value: 'A2', viewValue: 'Station A2' },
    { value: 'B1', viewValue: 'Station B1' },
    { value: 'B2', viewValue: 'Station B2' },
    { value: 'C1', viewValue: 'Station C1' },
    { value: 'C2', viewValue: 'Station C2' },
  ];
  constructor(public dialogRef: MatDialogRef<EntryVehiculeFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.Registrationnumber = data.Registrationnumber || '';
      this.Vcategory = data.Vcategory || '';
      this.ownerfullname = data.ownerfullname || '';
      this.ownercontact = data.ownercontact || '';
      this.stationnumber = data.stationnumber || '';
      this.entrydatetime = data.entrydatetime || '';
      this.outdatetime = data.outdatetime || '';
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    if (!this.entrydatetime) {
      const now = new Date();
      this.entrydatetime = now.toISOString().slice(0, 16);
      now.setHours(now.getHours() + 2);
      this.outdatetime = now.toISOString().slice(0, 16);
    }
  }
  save(): void {
    this.dialogRef.close({ 
      Registrationnumber: this.Registrationnumber, 
      Vcategory: this.Vcategory, 
      ownerfullname: this.ownerfullname, 
      ownercontact: this.ownercontact,
      stationnumber: this.stationnumber,
      entrydatetime: this.entrydatetime ,
      outdatetime: this.outdatetime 

    });
  }
  getStatus(): string {
    // Determine status based on entrydatetime and outdatetime
    const now = new Date();
    const entryDate = new Date(this.entrydatetime);
    const outDate = new Date(this.outdatetime);

    if (now >= entryDate && now <= outDate) {
      return 'In';
    } else {
      return 'Out';
    }
  }
  getStatusStyle(): object {
    // Set color based on status
    const status = this.getStatus();
    return {
      'color': status === 'In' ? 'green' : 'red'
    };
  }
}
