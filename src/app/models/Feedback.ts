import { Participant } from "./Participant";
export class Feedback {
    id!: number;
    participant!: Participant; // Référence à l'entité Participant
    eventId!: number; // ID de l'événement auquel le feedback est associé
    comment!: string;
    rating!: number; // Note donnée
  }