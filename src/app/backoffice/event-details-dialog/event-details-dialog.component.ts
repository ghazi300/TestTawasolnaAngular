import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/Services/event.service';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/Services/participant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-details-dialog',
  templateUrl: './event-details-dialog.component.html',
  styleUrls: ['./event-details-dialog.component.scss']
})
export class EventDetailsDialogComponent implements OnInit {
  // Déclaration des propriétés et initialisation des données
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

  // Chargement des détails de l'événement
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

  // Chargement des participants
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

  // Mise à jour des participants disponibles
  updateAvailableParticipants(): void {
    const eventParticipantIds = this.data.participants ? this.data.participants.map(p => p.id) : [];
    this.availableParticipants = this.allParticipants.filter(participant => !eventParticipantIds.includes(participant.id));
  }

  // Ajouter des participants à l'événement
  addParticipants(): void {
    this.data.participants = this.data.participants || [];
    this.data.participants.push(...this.selectedParticipants);
    this.updateAvailableParticipants();
    this.selectedParticipants = [];
  }

  // Sauvegarde des changements apportés à l'événement
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

  // Annulation des modifications en cours
  cancelEdit(): void {
    this.data = { ...this.originalEvent };
    this.editMode = false;
    this.updateAvailableParticipants();
  }

  // Fermeture du dialogue
  onClose(): void {
    this.dialogRef.close();
  }

  // Suppression de l'événement
  deleteEvent(eventId: number | undefined, eventTitle: string): void {
    if (eventId === undefined) {
      console.error('ID de l\'événement est undefined. Impossible de supprimer.');
      return;
    }

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer l\'événement ' + eventTitle + ' ?',
      text: 'Vous ne pourrez pas récupérer ces données après la suppression !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.eventService.deleteEvent(eventId).subscribe(
          () => {
            console.log('Event deleted successfully');
            Swal.fire(
              'Supprimé !',
              'L\'événement a été supprimé avec succès.',
              'success'
            );
            this.loadEventDetails();
            this.dialogRef.close(); 
          },
          error => {
            console.error('Error deleting event:', error);
            Swal.fire(
              'Erreur !',
              'Une erreur est survenue lors de la suppression de l\'événement.',
              'error'
            );
          }
        );
      }
    });
  }

  // Méthode pour envoyer un email à un participant
  sendEmail(email: string): void {
    // Ici, vous pouvez ajouter la logique pour envoyer un email à l'adresse spécifiée
    console.log('Sending email to:', email);
    // Exemple simple avec une fenêtre de confirmation
    Swal.fire({
      title: 'Envoyer un email',
      text: `Souhaitez-vous envoyer un email à ${email} ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Envoyer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        console.log('Email sent successfully!');
        Swal.fire(
          'Envoyé !',
          `L'email a été envoyé à ${email}.`,
          'success'
        );
        // Ici, vous pouvez appeler un service pour envoyer l'email
        // Par exemple : this.emailService.sendEmail(email);
      }
    });
  }
}
