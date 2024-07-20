import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EventRequest} from "../../../../services/models/event-request";
import {EventService} from "../../../../services/services/event.service";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent {
  eventRequest: EventRequest = {
    category: 'meeting',
    description: '',
    endDate: '',
    location: '',
    startDate: '',
    status: 'planned',
    title: ''
  };

  allDay: boolean = false;
constructor(public dialogRef: MatDialogRef<AddEventDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any,
            private eventService:EventService) {
  this.eventRequest.startDate = data.start;
  console.log(this.data.start)

}
  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.eventService.createEvent({body:this.eventRequest}).subscribe(
        (response) => {
          console.log('Event created successfully:', response);
          this.dialogRef.close(response); // Close dialog on successful creation
        },
        (error) => {
          console.error('Failed to create event:', error);

        }
    );
  }

}
