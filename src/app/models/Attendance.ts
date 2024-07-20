import { Participant } from "./Participant";
import { Event } from "./event";

export class Attendance {
  id?: string;
  event?: Event;
  participantName?: Participant;
  attended?: boolean;

  constructor(
    id?: string,
    event?: Event,
    participantName?: Participant,
    attended?: boolean
  ) {
    this.id = id;
    this.event = event;
    this.participantName = participantName;
    this.attended = attended;
  }
}
