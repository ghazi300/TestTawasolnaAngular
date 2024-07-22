import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/Services/event.service';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/Services/participant.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-event-details-dialog',
  templateUrl: './event-details-dialog.component.html',
  styleUrls: ['./event-details-dialog.component.scss']
})
export class EventDetailsDialogComponent implements OnInit {
  // Déclaration des propriétés et initialisation des données
  editMode = false;
  selectedFile: File | null = null;
  originalEvent: Event;
  allParticipants: Participant[] = [];
  availableParticipants: Participant[] = [];
  selectedParticipants: Participant[] = [];

  constructor(
    public dialogRef: MatDialogRef<EventDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private eventService: EventService,
    private participantService: ParticipantService,
    private http: HttpClient
  ) {
    this.originalEvent = { ...data };
  }

  ngOnInit(): void {
    this.loadEventDetails();
  }

  // Gestion de la sélection de fichier
  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
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
      if (this.selectedFile) {
        this.uploadFile(this.selectedFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.Response) {
              this.data.imageUrl = event.body.filePath; // Mise à jour du chemin de l'image
              this.updateEvent();
            }
          },
          error => {
            console.error('Échec de l\'upload du fichier :', error);
          }
        );
      } else {
        this.updateEvent();
      }
    } else {
      console.error('Impossible de mettre à jour l\'événement : ID de l\'événement est undefined.');
    }
  }
  
  // Mise à jour de l'événement
  updateEvent(): void {
    // Vérifier que l'ID de l'événement est défini
    if (this.data.id !== undefined) {
      this.eventService.updateEvent(this.data.id, this.data).subscribe(
        updatedEvent => {
          console.log('Événement mis à jour :', updatedEvent);
          this.editMode = false;
        },
        error => {
          console.error('Erreur lors de la mise à jour de l\'événement :', error);
        }
      );
    } else {
      console.error('Impossible de mettre à jour l\'événement : ID de l\'événement est undefined.');
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

  // Téléchargement du fichier
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('http://localhost:9002/Resident-Support-Services/api/upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
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
    console.log('Sending email to:', email);
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
