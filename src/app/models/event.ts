import { CalendarEvent as AngularCalendarEvent } from 'angular-calendar'; // Importez depuis 'angular-calendar'
import { Participant } from './Participant';

export interface Event {
    id?: number;
    title: string;
    start: Date;
    end: Date;
    participants: Participant[];
    location: string;
    description: string;
    category: string;
    imageUrl: string;
    maxParticipants: number;
    notes: string;
}

export interface CalendarEvent<MetaType = any> extends AngularCalendarEvent<MetaType> {
    id?: number;
    participants?: Participant[];
    location?: string;
    description?: string;
    category?: string;
    imageUrl?: string;
    maxParticipants?: number;
    notes?: string;
}
