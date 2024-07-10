import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
export interface Incident {
  id: number;
  description: string;
  severity: string;
  status: string;
  date: string;
}
const INCIDENT_DATA: Incident[] = [
  { id: 1, description: 'Power outage in building A', severity: 'High', status: 'Resolved', date: '2024-06-01' },
  { id: 2, description: 'Fire alarm malfunction', severity: 'Critical', status: 'In Progress', date: '2024-06-02' },
  { id: 3, description: 'Water leak in basement', severity: 'Medium', status: 'Open', date: '2024-06-03' },
  { id: 4, description: 'Elevator breakdown', severity: 'Low', status: 'Resolved', date: '2024-06-04' },
];

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit{

  displayedColumns: string[] = ['id', 'description', 'severity', 'status', 'date','actions'];
  dataSource = INCIDENT_DATA;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewDetails(id: number): void {
    this.router.navigate(['/admin/crisis/incident/detail/', id]);

  }
}