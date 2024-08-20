import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/service/incident.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  incidents: any[] = [];
  images: { [id: string]: string[] } = {};
  resourceImages: { [resourceId: string]: string[] } = {};
  selectedImage: string | null = null;

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidentService.getIncidents().subscribe(
      (data: any[]) => {
        this.incidents = data;
        this.incidents.forEach(incident => {
          if (incident.images) {
            this.loadIncidentImages(incident.id, incident.images);
          }
          if (incident.resources) {
            incident.resources.forEach((resource: { images: string[]; id: string; }) => {
              if (resource.images) {
                this.loadResourceImages(resource.id, resource.images);
              }
            });
          }
        });
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }

  loadIncidentImages(incidentId: string, imageFilenames: string[]): void {
    this.images[incidentId] = [];
    imageFilenames.forEach(filename => {
      this.incidentService.getImageById(filename).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.images[incidentId].push(reader.result as string);
          };
          reader.readAsDataURL(blob);
        },
        (error) => {
          console.error('Error fetching incident image:', error);
        }
      );
    });
  }

  loadResourceImages(resourceId: string, imageFilenames: string[]): void {
    this.resourceImages[resourceId] = [];
    imageFilenames.forEach(filename => {
      this.incidentService.getImageById(filename).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
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

  getSeverityIcon(gravite: string): string {
    switch (gravite) {
      case 'FAIBLE':
        return 'low_priority';
      case 'MOYENNE':
        return 'priority_high';
      case 'ELEVEE':
        return 'error';
      default:
        return 'help';
    }
  }
}
