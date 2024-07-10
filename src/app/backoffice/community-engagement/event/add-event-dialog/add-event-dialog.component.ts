import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent {
  title: string = '';
  start: string = '';
  end: string = '';
  allDay: boolean = false;
constructor(public dialogRef: MatDialogRef<AddEventDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any) {
  this.start = data.start;
  this.end = data.end;
}
  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({ title: this.title, start: this.start, end: this.end, allDay: this.allDay });
  }

}