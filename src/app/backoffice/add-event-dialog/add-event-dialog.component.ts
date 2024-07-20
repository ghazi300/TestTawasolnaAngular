import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Event } from 'src/app/models/event';
import { EmailService } from 'src/app/Services/EmailService';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent {
  event: Partial<Event> = {};
  selectedFile: File | null = null;
  recipientEmail: string = ''; // Variable to store recipient email

  @ViewChild('fileInput') fileInput!: ElementRef;  // Use non-null assertion operator here

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    private http: HttpClient, // Inject HttpClient here
    private emailService: EmailService // Inject EmailService here
  ) { }

  onSubmit(): void {
    if (this.selectedFile) {
      this.uploadFile(this.selectedFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.Response) {
            this.event.imageUrl = event.body.filePath; // Assuming the server returns the file path
            this.dialogRef.close(this.event);
          }
        },
        error => {
          console.error('File upload failed:', error);
        }
      );
    } else {
      this.dialogRef.close(this.event);
    }
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
            console.log('E-mail sent successfully!');
          },
          error => {
            console.error('Error sending e-mail: ', error);
          }
        );
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
}
