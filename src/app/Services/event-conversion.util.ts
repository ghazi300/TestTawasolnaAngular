import { CalendarEvent } from 'angular-calendar';
import { Event } from '../models/event';

// Convertir CalendarEvent en Event
export function calendarEventToEvent(calendarEvent: CalendarEvent): Event {
  return {
    id: calendarEvent.id !== undefined ? Number(calendarEvent.id) : undefined,
    title: calendarEvent.title,
    start: calendarEvent.start instanceof Date ? calendarEvent.start : new Date(calendarEvent.start as string), // Conversion de la chaîne en Date
    end: calendarEvent.end ? (calendarEvent.end instanceof Date ? calendarEvent.end : new Date(calendarEvent.end as string)) : new Date(), // Conversion de la chaîne en Date
    location: '',
    description: '',
    category: '',
    imageUrl: '',
    maxParticipants: 0,
    notes: '',
    participants: []
  };
}

// Convertir Event en CalendarEvent
export function eventToCalendarEvent(event: Event): CalendarEvent {
  return {
    id: event.id !== undefined ? Number(event.id) : undefined,
    title: event.title,
    start: event.start instanceof Date ? event.start : new Date(event.start as string), // Assurez-vous que start est une Date
    end: event.end instanceof Date ? event.end : new Date(event.end as string), // Assurez-vous que end est une Date
    color: undefined,
    actions: [],
    allDay: false,
    cssClass: '',
    resizable: {},
    draggable: false
  };
}
