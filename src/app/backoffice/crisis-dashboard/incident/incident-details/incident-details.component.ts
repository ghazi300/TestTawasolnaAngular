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

  constructor(private route: ActivatedRoute, private incidentService: IncidentService) { }

  ngOnInit(): void {
    const incidentId = this.route.snapshot.paramMap.get('id');
    if (incidentId) {
      this.incidentService.getIncidentById(incidentId).subscribe(
        (data: any) => {
          this.incident = data;
        },
        (error) => {
          console.error('Error fetching incident details:', error);
        }
      );
    }
  }

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
