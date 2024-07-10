import { Component } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../add-event-dialog/add-event-dialog.component";

@Component({
  selector: 'app-event-planner-calendar',
  templateUrl: './event-planner-calendar.component.html',
  styleUrls: ['./event-planner-calendar.component.scss']
})
export class EventPlannerCalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    events: [
      { title: 'Event 1', date: '2023-07-01' },
      { title: 'Event 2', date: '2023-07-05' }
    ],
    editable: true,
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventDrop.bind(this)
  };
  constructor(public dialog: MatDialog) {
  }

  handleDateSelect(selectInfo: any) {
    // Handle date select logic here
    const dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '350px',
      data: { start: selectInfo.startStr, end: selectInfo.endStr }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // Clear the selection

        calendarApi.addEvent({
          title: result.title,
          start: result.start,
          end: result.end,
          allDay: result.allDay
        });
      }
    });
  }

  handleEventClick(clickInfo: any) {
    // Handle event click logic here
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  }

  handleEventDrop(dropInfo: any) {
    // Handle event drop logic here
    console.log('Event dropped to new date:', dropInfo.event.start);
  }

}