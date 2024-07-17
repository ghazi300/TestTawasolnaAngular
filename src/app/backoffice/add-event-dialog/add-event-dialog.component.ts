import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/models/event';
import { EmailService } from 'src/app/Services/EmailService';// Importez votre service EmailService

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent {
  event: Partial<Event> = {};
  selectedFile: File | null = null;
  recipientEmail: string = ''; // Ajoutez une variable pour stocker l'e-mail du destinataire

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    private http: HttpClient, // Injectez HttpClient ici
    private emailService: EmailService // Injectez EmailService ici
  ) { }

  onSubmit(): void {
    // Logique de sauvegarde ici
    this.dialogRef.close(this.event);
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    // Logique de téléchargement de fichier ici, par exemple, prévisualiser l'image ou télécharger sur le serveur
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.event.imageUrl = reader.result as string;
      };
    }
  }

  sendEmail(recipientEmail: string): void {
    // Vérifiez si l'e-mail du destinataire est défini et que l'événement est valide
    if (recipientEmail && this.event) {
      // Appelez le service EmailService pour envoyer l'e-mail
      this.emailService.sendEventDetailsEmail(recipientEmail, this.event)
        .subscribe(
          () => {
            console.log('E-mail sent successfully!');
            // Gérez la réponse ou affichez un message de confirmation à l'utilisateur
          },
          error => {
            console.error('Error sending e-mail: ', error);
            // Gérez les erreurs d'envoi d'e-mail
          }
        );
    }
  }
}
