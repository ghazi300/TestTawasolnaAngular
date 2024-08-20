// incident-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentService } from 'src/app/service/incident.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.scss']
})
export class IncidentDetailsComponent implements OnInit {
  incident: any | null = null;
  selectedImage: string | null = null;
  files: string[] = []; 
  resourceImages: { [resourceId: string]: string[] } = {}; // Resource image URLs

  constructor(
    private route: ActivatedRoute,
    private incidentService: IncidentService
  ) { }

  ngOnInit(): void {
    const incidentId = this.route.snapshot.paramMap.get('id');
    if (incidentId) {
      this.incidentService.getIncidentById(incidentId).subscribe(
        (data: any) => {
          this.incident = data;
          if (this.incident?.images) {
            this.loadImages(this.incident.images);
          }
          if (this.incident?.resources) {
            this.incident.resources.forEach((resource: any) => {
              if (resource.images) {
                this.loadResourceImages(resource._id, resource.images);
              }
            });
          }
          console.log("id",incidentId);
        },
        (error) => {
          console.error('Error fetching incident details:', error);
        }
      );
    }
  }

  loadImages(imageFilenames: string[]): void {
    imageFilenames.forEach(filename => {
      this.incidentService.getImageById(filename).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.files.push(reader.result as string);
          };
          reader.readAsDataURL(blob);
        },
        (error) => {
          console.error('Error fetching image:', error);
        }
      );
    });
  }

  loadResourceImages(resourceId: string, imageFilenames: string[]): void {
    imageFilenames.forEach(filename => {
      this.incidentService.getImageById(filename).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (!this.resourceImages[resourceId]) {
              this.resourceImages[resourceId] = [];
            }
            this.resourceImages[resourceId].push(reader.result as string);
          };
          reader.readAsDataURL(blob);
        },
        (error) => {
          console.error('Error fetching resource image:', error);
        }
      );
    });
  }

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
