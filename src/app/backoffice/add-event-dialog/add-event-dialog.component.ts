import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/Services/event.service';
import { EmailService } from 'src/app/Services/EmailService';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent {
  event: Partial<Event> = {};
  selectedFile: File | null = null;
  recipientEmail: string = ''; // Variable pour l'email du destinataire

  @ViewChild('fileInput') fileInput!: ElementRef;  // Utilisation de l'opérateur d'affirmation non-null

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    private http: HttpClient, // Injection de HttpClient
    private eventService: EventService, // Injection du service d'événements
    private emailService: EmailService // Injection du service d'e-mails
  ) { }

  onSubmit(): void {
    if (this.selectedFile) {
      this.uploadFile(this.selectedFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.Response) {
            this.event.imageUrl = event.body.filePath; // Assumant que le serveur renvoie le chemin du fichier
            this.createEvent(); // Appel du service pour créer l'événement après l'upload
          }
        },
        error => {
          console.error('Échec de l\'upload du fichier :', error);
        }
      );
    } else {
      this.createEvent(); // Création de l'événement si aucun fichier n'est sélectionné
    }
  }

  createEvent(): void {
    this.eventService.createEvent(this.event as Event).subscribe(
      () => {
        this.dialogRef.close(this.event);
        if (this.recipientEmail) {
          this.sendEmail(this.recipientEmail); // Envoi de l'email après la création de l'événement
        }
      },
      error => {
        console.error('Échec de la création de l\'événement :', error);
      }
    );
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.event.imageUrl = reader.result as string;
      };
    }
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('http://localhost:9002/Resident-Support-Services/api/upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  sendEmail(recipientEmail: string): void {
    if (recipientEmail && this.event) {
      this.emailService.sendEventDetailsEmail(recipientEmail, this.event)
        .subscribe(
          () => {
            console.log('E-mail envoyé avec succès !');
          },
          error => {
            console.error('Erreur lors de l\'envoi de l\'email :', error);
          }
        );
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
}
