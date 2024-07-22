import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarEvent, CalendarView, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/Services/event.service';
import { EventDetailsDialogComponent } from '../event-details-dialog/event-details-dialog.component';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';

@Component({
  selector: 'app-facility-booking',
  templateUrl: './facility-booking.component.html',
  styleUrls: ['./facility-booking.component.scss']
})
export class FacilityBookingComponent implements OnInit {

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  activeDayIsOpen = false;
  events: Event[] = [];
  private clickTimeout: any = null; // Timer for detecting double-click
  private clickDelay: number = 300; // Time in milliseconds for double-click detection

  constructor(private eventService: EventService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      events => {
        this.events = events.map(event => ({
          id: event.id,
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          location: event.location ,
          description: event.description ,
          category: event.category,
          imageUrl: event.imageUrl ,
          maxParticipants: event.maxParticipants ,
          notes: event.notes,
          participants : event.participants
         
          
        }));
      },
      error => {
        console.error('Error loading events:', error);
      }
    );
  }

  setView(view: CalendarView): void {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = isSameDay(this.viewDate, date) && events.length > 0;
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent.id === event.id) {
        const updatedEvent: Event = {
          ...iEvent,
          start: newStart,
          end: newEnd || iEvent.end
        };
        this.saveEventDates(updatedEvent); 
        return updatedEvent;
      }
      return iEvent;
    });
  }
  
  
  

  handleEvent(action: string, event: CalendarEvent): void {
    const selectedEvent = this.events.find(e => e.id === event.id) as Event;

    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;

      // Handle double-click
    
    } else {
      this.clickTimeout = setTimeout(() => {
        // Handle single click
        this.dialog.open(EventDetailsDialogComponent, {
          data: selectedEvent
        });
        this.clickTimeout = null;
      }, this.clickDelay);
    }
  }
  


  showAddEventForm(): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newEvent: Event = {
          title: result.title || '',
          start: new Date(result.start || ''),
          end: new Date(result.end || ''),
          location: result.location || '',
          description: result.description || '',
          category: result.category || '',
          imageUrl: result.imageUrl || '',
          maxParticipants: result.maxParticipants || 0,
          notes: result.notes || '',
          participants: [] // Ensure participants are initialized if needed
        };
  
        this.eventService.createEvent(newEvent).subscribe(
          createdEvent => {
            // Ensure createdEvent contains all required fields
            this.events = [
              ...this.events,
              {
                id: createdEvent.id,
                title: createdEvent.title,
                start: new Date(createdEvent.start),
                end: new Date(createdEvent.end),
                location: createdEvent.location,
                description: createdEvent.description,
                category: createdEvent.category,
                imageUrl: createdEvent.imageUrl,
                maxParticipants: createdEvent.maxParticipants,
                notes: createdEvent.notes,
                participants: createdEvent.participants // Include participants if needed
              }
            ];
          },
          error => {
            console.error('Error adding event:', error);
          }
        );
      }
    });
  }
  
  
  saveEventDates(event: CalendarEvent<any>): void {
    const eventData: Partial<Event> = {
      id: event.id as number,
      title: event.title,
      start: event.start,
      end: event.end || event.start,
    };

    if (eventData.id !== undefined) {
      this.eventService.updateEvent(eventData.id, eventData as Event).subscribe(
        () => {
          console.log('Event dates updated successfully');
        },
        error => {
          console.error('Error updating event dates:', error);
        }
      );
    } else {
      console.error('Event id is not defined.');
    }
  }
}
