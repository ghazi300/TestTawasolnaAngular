import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { GeocodingService } from 'src/app/service/geocoding.service';
import { IncidentService } from 'src/app/service/incident.service';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();
  @ViewChild('fileInput') fileInput!: ElementRef;

  resourceForm: FormGroup;
  uploadedFiles: File[] = [];
  filePreviewUrls: { [key: string]: string } = {};
  fileContents: { [key: string]: string } = {};
  selectedImage: string | null = null;
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
  availabilityOptions: string[] = ['AVAILABLE', 'UNAVAILABLE'];

  constructor(private fb: FormBuilder, private resourceService: ResourceService, private as: AlertService, private is: IncidentService,private geocodingService: GeocodingService) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      availability: ['', Validators.required],
      location: ['', Validators.required],
      images: [null]
    });
  }

  onSubmit(): void {
    if (this.resourceForm.valid) {
      const locationName = this.resourceForm.get('location')?.value;
  
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
              
              this.is.uploadFiles(this.uploadedFiles).subscribe(
                (fileUploadResponse: any[]) => {
                  const fileUrls = fileUploadResponse.map((file: { id: string; fileName: string; fileType: string; }) => file.fileName); // Ajuster selon la réponse réelle
                  
                  const resourcePayload = {
                    ...this.resourceForm.value,
                    location: locationArray, // Inclure les coordonnées converties
                    images: fileUrls
                  };
        
                  this.resourceService.createResource(resourcePayload).subscribe(
                    (response) => {
                      console.log('Resource created:', response);
                      this.as.showSuccess('Resource created successfully!');
                      this.formCancel.emit(); // Émettre l'événement pour fermer le modal
                    },
                    (error) => {
                      console.error('Error creating resource:', error);
                      this.as.showError('Error creating resource.');
                    }
                  );
                },
                (error) => {
                  console.error('Error uploading files:', error);
                  this.as.showError('Error uploading files.');
                }
              );
            } else {
              console.error('Invalid coordinates:', location.lat, location.lon);
              this.as.showError('Invalid coordinates. Please try again.');
            }
          } else {
            console.error('No coordinates found in response');
            this.as.showError('No coordinates found. Please try again.');
          }
        } else {
          console.error('Invalid response from geocoding service');
          this.as.showError('Invalid response from geocoding service. Please try again.');
        }
      }, error => {
        console.error('Error retrieving coordinates:', error);
        this.as.showError('Error retrieving coordinates. Please try again.');
      });
    }
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

  onCancel() {
    this.resourceForm.reset();
    this.uploadedFiles = [];
    this.filePreviewUrls = {};
    this.fileContents = {};
    this.formCancel.emit();
  }
}
