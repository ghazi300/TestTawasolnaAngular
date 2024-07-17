import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/Services/event.service';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/Services/participant.service';

@Component({
  selector: 'app-event-details-dialog',
  templateUrl: './event-details-dialog.component.html',
  styleUrls: ['./event-details-dialog.component.scss']
})
export class EventDetailsDialogComponent implements OnInit {
  editMode = false;
  originalEvent: Event;
  allParticipants: Participant[] = [];
  availableParticipants: Participant[] = [];
  selectedParticipants: Participant[] = [];

  constructor(
    public dialogRef: MatDialogRef<EventDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private eventService: EventService,
    private participantService: ParticipantService
  ) {
    this.originalEvent = { ...data };
  }

  ngOnInit(): void {
    this.loadEventDetails();
  }

  loadEventDetails(): void {
    if (this.data.id !== undefined) {
      this.eventService.getEventById(this.data.id).subscribe(
        event => {
          if (event) {
            this.data = event;
          }
          this.loadParticipants();
        },
        error => {
          console.error('Error fetching event details:', error);
          this.loadParticipants();
        }
      );
    } else {
      this.loadParticipants();
    }
  }

  loadParticipants(): void {
    this.participantService.getAllParticipants().subscribe(
      participants => {
        this.allParticipants = participants;
        this.updateAvailableParticipants();
      },
      error => {
        console.error('Error fetching participants:', error);
      }
    );
  }

  updateAvailableParticipants(): void {
    const eventParticipantIds = this.data.participants ? this.data.participants.map(p => p.id) : [];
    this.availableParticipants = this.allParticipants.filter(participant => !eventParticipantIds.includes(participant.id));
  }

  addParticipants(): void {
    // Vérifie si this.data.participants est défini, sinon initialise-le
    this.data.participants = this.data.participants || [];
    // Ajoute les participants sélectionnés à this.data.participants
    this.data.participants.push(...this.selectedParticipants);
    this.updateAvailableParticipants(); // Mise à jour des participants disponibles
    this.selectedParticipants = []; // Efface la sélection après l'ajout
  }

  saveChanges(): void {
    if (this.data.id !== undefined) {
      this.eventService.updateEvent(this.data.id, this.data).subscribe(
        updatedEvent => {
          console.log('Event updated:', updatedEvent);
          this.editMode = false;
        },
        error => {
          console.error('Error updating event:', error);
        }
      );
    } else {
      console.error('Cannot update event: Event ID is undefined.');
    }
  }

  cancelEdit(): void {
    this.data = { ...this.originalEvent };
    this.editMode = false;
    this.updateAvailableParticipants();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
