import { Component } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../add-event-dialog/add-event-dialog.component";
import {EventService} from "../../../../services/services/event.service";
import {EventResponse} from "../../../../services/models/event-response";
import {AuthService} from "../../../../service/auth.service";

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
    events: [], // Initialize with empty array
    editable: true,
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventDrop.bind(this)
  };

  constructor(public dialog: MatDialog, private eventService: EventService,private authService:AuthService) {}

  ngOnInit(): void {
    this.loadEvents(); // Load events initially
  }

  loadEvents(): void {


    this.authService.getAllEvents().subscribe({
      next:(events: any)=>{

        this.calendarOptions.events = events.map((event: { id:any,title: any; startDate: any; endDate: any; }) => ({
          id:event.id,
          title: event.title,
          start: event.startDate,
          end: event.endDate
        }));

      },
      error : (err)=>{
        console.log(err)



      }

    })





  }

  handleDateSelect(selectInfo: any): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '800px',
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

  handleEventClick(clickInfo: any): void {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {

      const eventId = clickInfo.event.id;

      this.eventService.deleteEvent({eventId:eventId}).subscribe(
          () => {
            console.log('Event deleted successfully');
            clickInfo.event.remove(); // Remove event from calendar on successful deletion
          },
          (error) => {
            console.error('Failed to delete event:', error);
            // Handle error deleting event
          }
      );
    }
  }

  handleEventDrop(dropInfo: any): void {
    console.log('Event dropped to new date:', dropInfo.event.start);
    // Implement logic to update event in backend if needed
  }
}
