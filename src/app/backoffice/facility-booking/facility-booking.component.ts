declare var zuck: any; // Declare zuck variable for TypeScript

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarEvent, CalendarView, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Event } from 'src/app/models/event'; 
import { EventService } from 'src/app/Services/event.service'; 
import { EventDetailsDialogComponent } from '../event-details-dialog/event-details-dialog.component'; 
import mongoose, { mongo } from 'mongoose';

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
  showForm = false;
  newEvent: Partial<Event> = {};

  events: CalendarEvent[] = [];
  selectedEvent: Event | undefined;

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
          location: event.location || '',
          description: event.description || '',
          category: event.category || '',
          imageUrl: event.imageUrl || '',
          maxParticipants: event.maxParticipants || 0,
          notes: event.notes || '',
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
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
      if (iEvent === event) {
        const updatedEvent = { ...event, start: newStart, end: newEnd };
        this.saveEventDates(updatedEvent); 
        return updatedEvent;
      }
      return iEvent;
    });
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.selectedEvent = this.events.find(e => e.id === event.id) as Event;
    console.log(this.selectedEvent); // Log the selected event to check its structure
    this.dialog.open(EventDetailsDialogComponent, {
      data: this.selectedEvent
    });
  }

  showAddEventForm(): void {
    this.showForm = true;
  }

  addEvent(): void {
    const newEvent: Event = {
      title: this.newEvent.title || '',
      start: new Date(this.newEvent.start || ''),
      end: new Date(this.newEvent.end || ''),
      location: this.newEvent.location || '',
      description: this.newEvent.description || '',
      category: this.newEvent.category || '',
      imageUrl: this.newEvent.imageUrl || '',
      maxParticipants: this.newEvent.maxParticipants || 0,
      notes: this.newEvent.notes || '',
      participants: []
    };

    this.eventService.createEvent(newEvent).subscribe(
      createdEvent => {
        this.events = [
          ...this.events,
          {
            id: createdEvent.id,
            title: createdEvent.title,
            start: new Date(createdEvent.start),
            end: new Date(createdEvent.end),
            location: createdEvent.location || '',
            description: createdEvent.description || '',
            category: createdEvent.category || '',
            imageUrl: createdEvent.imageUrl || '',
            maxParticipants: createdEvent.maxParticipants || 0,
            notes: createdEvent.notes || '',
            draggable: true,
            resizable: {
              beforeStart: true,
              afterEnd: true,
            }
          }
        ];
        this.showForm = false; // Hide the form after successful addition
        this.newEvent = {}; // Clear the form fields
      },
      error => {
        console.error('Error adding event:', error);
      }
    );
  }

  saveEventDates(event: CalendarEvent<any>): void {
    // Assurez-vous d'avoir une logique pour récupérer les données nécessaires
    // Adaptation à votre logique spécifique
    const eventData: Partial<Event> = {
      id: event.id as number,
      title: event.title,
      start: event.start,
      end: event.end || event.start, // Définissez une valeur par défaut pour end si nécessaire
      location: event.location || '',
      description: event.description || '',
      category: event.category || '',
      imageUrl: event.imageUrl || '',
      maxParticipants: event.maxParticipants || 0, // Définissez une valeur par défaut si nécessaire
      notes: event.notes || ''
    };
  
    // Vérifiez si id est défini avant d'appeler updateEvent
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
