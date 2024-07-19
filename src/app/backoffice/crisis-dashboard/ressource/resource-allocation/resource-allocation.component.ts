import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/service/incident.service';
import { ResourceService } from 'src/app/service/resource.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.scss']
})
export class ResourceAllocationComponent implements OnInit {
  incidents: any[] = [];
  resources: any[] = [];
  displayedColumns: string[] = ['name', 'type', 'availability', 'select'];

  selectedIncident: string | null = null;
  selectedResourceIds: string[] = [];

  constructor(
    private incidentService: IncidentService,
    private resourceService: ResourceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadIncidents();
    this.loadResources();
  }

  loadIncidents() {
    this.incidentService.getIncidents().subscribe(
      (data) => {
        this.incidents = data;
      },
      (error) => {
        console.error('Error loading incidents:', error);
        this.snackBar.open('Failed to load incidents.', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar-error']
        });
      }
    );
  }

  loadResources() {
    this.resourceService.getResources().subscribe(
      (data) => {
        this.resources = data;
      },
      (error) => {
        console.error('Error loading resources:', error);
        this.snackBar.open('Failed to load resources.', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar-error']
        });
      }
    );
  }

  selectResource(resource: any) {
    if (this.selectedResourceIds.includes(resource.id)) {
      this.selectedResourceIds = this.selectedResourceIds.filter(id => id !== resource.id);
    } else {
      this.selectedResourceIds.push(resource.id);
    }
  }

  submitAllocation() {
    if (this.selectedIncident && this.selectedResourceIds.length > 0) {
      this.incidentService.allocateResources(this.selectedIncident, this.selectedResourceIds).subscribe(
        (response) => {
          this.snackBar.open('Resources successfully allocated!', 'Close', {
            duration: 3000,
            panelClass: ['snack-bar-success']
          });
          // Clear the selection
          this.selectedIncident = null;
          this.selectedResourceIds = [];
          this.loadResources(); // Reload resources after allocation
        },
        (error) => {
          this.snackBar.open('Failed to allocate resources. Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['snack-bar-error']
          });
          console.error('Error allocating resources:', error);
        }
      );
    } else {
      this.snackBar.open('Please select an incident and at least one resource.', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar-warning']
      });
    }
  }
}
