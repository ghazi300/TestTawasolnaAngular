import { Participant } from "./Participant";

// src/app/models/event.ts
export interface Event {
    id?: number;
    title: string;
    start:  Date;
    end:  Date;
    participants: Participant[];
    location: string;
    description: string;
    category: string;
    imageUrl: string;
    maxParticipants: number;
    notes: string;
  }
  