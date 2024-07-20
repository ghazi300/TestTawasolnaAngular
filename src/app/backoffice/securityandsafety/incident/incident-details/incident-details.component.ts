import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
interface Incident {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  severity: string;
  files?: string[];
}

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.scss']
})
export class IncidentDetailsComponent implements OnInit{
  incident: Incident | null = null;
  panelOpenState = false;
  selectedImage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const incidentId = +this.route.snapshot.paramMap.get('id')!;
    // Remplacez cette ligne par la logique pour récupérer les détails de l'incident depuis votre source de données
    this.incident = this.getIncidentDetails(incidentId);
  }

  getIncidentDetails(id: number): Incident {
    // Exemple de données (à remplacer par vos données réelles)
    const INCIDENT_DATA = [
      { id: 1, title: 'Incident 1', description: 'Description 1', location: 'Location 1', date: '2024-07-01', time: '10:00', severity: 'High', files: [] },
      { id: 2, title: 'Incident 2', description: 'Description 2', location: 'Location 2', date: '2024-07-02', time: '11:00', severity: 'Medium', files: [] },
      // ... plus de données ici
    ];
    return INCIDENT_DATA.find(incident => incident.id === id)!;
  }

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

}