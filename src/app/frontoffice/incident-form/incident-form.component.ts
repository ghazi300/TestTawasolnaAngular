import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { IncidentService } from 'src/app/service/incident.service';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent {
  @Output() closeModal = new EventEmitter<void>();

  incidentForm: FormGroup;
  uploadedFiles: File[] = [];
  filePreviewUrls: { [key: string]: string } = {};
  fileContents: { [key: string]: string } = {};
  selectedImage: string | null = null;
  graviteOptions: string[] = ['FAIBLE', 'MOYENNE', 'ELEVEE'];
  typeOptions: string[] = [
    'FIRE',
    'MEDICAL_EMERGENCY',
    'NATURAL_DISASTER',
    'SECURITY_BREACH',
    'TRAFFIC_ACCIDENT',
    'EQUIPMENT_FAILURE',
    'HAZARDOUS_SPILL',
    'POWER_OUTAGE',
    'CYBER_ATTACK',
    'GAS_LEAK'
  ];

  constructor(
    private fb: FormBuilder,
    private incidentService: IncidentService,
    private alertService: AlertService
  ) {
    this.incidentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      gravite: ['', Validators.required],
      type: ['', Validators.required],
      images: [null]
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    for (let file of files) {
      this.uploadedFiles.push(file);
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (this.isImage(file)) {
          this.filePreviewUrls[file.name] = e.target.result;
        } else {
          const textContent = e.target.result as string;
          this.fileContents[file.name] = textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
        }
      };

      if (this.isImage(file)) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }

  openImage(fileName: string) {
    this.selectedImage = fileName;
  }

  closeImage() {
    this.selectedImage = null;
  }

  removeFile(file: File) {
    const index = this.uploadedFiles.indexOf(file);
    if (index > -1) {
      this.uploadedFiles.splice(index, 1);
      delete this.filePreviewUrls[file.name];
      delete this.fileContents[file.name];
    }
  }

  onSubmit(): void {
    if (this.incidentForm.valid) {
      this.incidentService.uploadFiles(this.uploadedFiles).subscribe(
        (fileUploadResponse: any[]) => {
          const fileUrls = fileUploadResponse.map((file: { id: string; fileName: string; fileType: string; }) => file.fileName); // Ajuster selon la réponse réelle
          const incidentPayload = {
            ...this.incidentForm.value,
            images: fileUrls
          };
  
          this.incidentService.createIncident(incidentPayload).subscribe(
            (response) => {
              console.log('Incident créé:', response);
              this.alertService.showSuccess('Incident créé avec succès!');
              this.closeModal.emit(); // Émettre l'événement pour fermer le modal
            },
            (error) => {
              console.error('Erreur lors de la création de l\'incident:', error);
              this.alertService.showError('Erreur lors de la création de l\'incident.');
            }
          );
        },
        (error) => {
          console.error('Erreur lors du téléversement des fichiers:', error);
          this.alertService.showError('Erreur lors du téléversement des fichiers.');
        }
      );
    }
  }
  
  onCancel() {
    this.incidentForm.reset();
    this.uploadedFiles = [];
    this.filePreviewUrls = {};
    this.fileContents = {};
    this.closeModal.emit();
  }
}
