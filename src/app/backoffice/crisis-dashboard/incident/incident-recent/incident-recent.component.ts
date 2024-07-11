import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  recentIncidents: Incident[] = [
    { id: 1, title: 'Server Down', status: 'open' },
    { id: 2, title: 'Data Breach', status: 'in-progress' },
    { id: 3, title: 'Network Issue', status: 'closed' }
  ];

  constructor(private router:Router) {}

  ngOnInit(): void {}

  viewDetails(id: number): void {
    // Logic to view details of the incident
    this.router.navigate(['/admin/crisis/incident/detail/', id]);
  }
}