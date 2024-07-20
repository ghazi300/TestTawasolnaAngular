import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from 'src/app/service/incident.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  displayedColumns: string[] = ['title', 'gravite', 'status', 'date', 'actions'];
  dataSource: any[] = [];

  constructor(private router: Router, private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.incidentService.getIncidents().subscribe(
      (data: any[]) => {
        this.dataSource = data;
        console.log('Fetched Incidents:', this.dataSource); // Logging to check the data
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }

  viewDetails(id: string): void {
    console.log('Navigating to details with ID:', id); // Logging to check the ID
    this.router.navigate(['/admin/crisis/incident/detail', id]);
  }
}
