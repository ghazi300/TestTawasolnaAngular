import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { GeocodingService } from 'src/app/service/geocoding.service';
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
    private alertService: AlertService,
    private geocodingService:GeocodingService
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
      const locationName = this.incidentForm.get('location')?.value;
  
      this.geocodingService.getCoordinates(locationName).subscribe(response => {
        if (response && Array.isArray(response) && response.length > 0) {
          // Extraire la première réponse de géocodage
          const location = response[0];
          if (location.lat && location.lon) {
            // Convertir les coordonnées en format numérique
            const latitude = parseFloat(location.lat);
            const longitude = parseFloat(location.lon);
  
            // Vérifier la validité des coordonnées
            if (!isNaN(latitude) && !isNaN(longitude)) {
              const locationArray = [latitude, longitude];
              
              this.incidentService.uploadFiles(this.uploadedFiles).subscribe(
                (fileUploadResponse: any[]) => {
                  const fileUrls = fileUploadResponse.map((file: { id: string; fileName: string; fileType: string; }) => file.fileName); // Ajuster selon la réponse réelle
                  
                  const incidentPayload = {
                    ...this.incidentForm.value,
                    location: locationArray, // Inclure les coordonnées converties
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
            } else {
              console.error('Invalid coordinates:', location.lat, location.lon);
              this.alertService.showError('Invalid coordinates. Please try again.');
            }
          } else {
            console.error('No coordinates found in response');
            this.alertService.showError('No coordinates found. Please try again.');
          }
        } else {
          console.error('Invalid response from geocoding service');
          this.alertService.showError('Invalid response from geocoding service. Please try again.');
        }
      }, error => {
        console.error('Error retrieving coordinates:', error);
        this.alertService.showError('Error retrieving coordinates. Please try again.');
      });
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
