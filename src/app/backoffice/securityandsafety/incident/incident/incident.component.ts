import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { IncidentService, Incident } from '../../../../service/incident-tawasalna.service';
import {ConfirmDialogComponent} from "./confirmdialog.component";
import {UpdateIncidentDialogComponent} from "./update-incident-dialog.component";

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  displayedColumns: string[] = ['description', 'location', 'time', 'category', 'status', 'actions'];
  dataSource: Incident[] = [];

  constructor(
      private router: Router,
      private incidentService: IncidentService,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.incidentService.getAllIncidents().subscribe((data: Incident[]) => {
      this.dataSource = data;
    });
  }

  deleteIncident(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.incidentService.deleteIncident(id).subscribe(() => {
          this.loadIncidents(); // Reload incidents after deletion
        });
      }
    });
  }

  updateIncident(incident: Incident): void {
    const dialogRef = this.dialog.open(UpdateIncidentDialogComponent, {
      width: '400px',
      data: { ...incident }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.incidentService.updateIncident(result.id, result).subscribe(() => {
          this.loadIncidents(); // Reload incidents after update
        });
      }
    });
  }
}
