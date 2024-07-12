import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from 'src/app/service/incident.service';

interface Incident {
  id: number;
  title: string;
  status: string;
}

@Component({
  selector: 'app-incident-recent',
  templateUrl: './incident-recent.component.html',
  styleUrls: ['./incident-recent.component.scss']
})
export class IncidentRecentComponent implements OnInit {
  recentIncidents: any[] = [];

  constructor(private router: Router, private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.loadRecentIncidents();
  }

  loadRecentIncidents(): void {
    this.incidentService.getRecentIncidents().subscribe(
      (data: any[]) => {
        this.recentIncidents = data;
      },
      (error) => {
        console.error('Error fetching recent incidents:', error);
      }
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/admin/crisis/incident/detail/', id]);
  }
}
