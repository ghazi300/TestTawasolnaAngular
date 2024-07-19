import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { UpdatePatrolRouteDialogComponent } from './update-patrol-route-dialog.component';
import {PatrolRouteService} from "../../../../service/patrolroute.service";

export interface PatrolRoute {
    id: string;
    officerName: string;
    routeDetails: string;
    startTime: string; // Assuming you handle date format appropriately from backend
    endTime: string;
}

@Component({
    selector: 'app-patrol-route-list',
    templateUrl: './patrol-route-list.html',
    styleUrls: ['./patrol-route-list.scss']
})
export class PatrolRouteListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'officerName', 'startTime', 'endTime', 'actions'];
    dataSource: PatrolRoute[] = [];

    constructor(private router: Router, private dialog: MatDialog, private patrolRouteService: PatrolRouteService) { }

    ngOnInit(): void {
        this.fetchPatrolRoutes();
    }

    fetchPatrolRoutes(): void {
        this.patrolRouteService.getAllPatrolRoutes().subscribe(
            (routes: PatrolRoute[]) => {
                this.dataSource = routes;
            },
            error => {
                console.error('Error fetching patrol routes:', error);
                // Handle error, e.g., show a snackbar or error message
            }
        );
    }

    openUpdateDialog(route: PatrolRoute): void {
        const dialogRef = this.dialog.open(UpdatePatrolRouteDialogComponent, {
            width: '500px',
            data: { ...route }
        });

        dialogRef.afterClosed().subscribe(updatedRoute => {
            if (updatedRoute) {
                // Update patrol route logic here, e.g., call API
                this.patrolRouteService.updatePatrolRoute(updatedRoute.id, updatedRoute).subscribe(
                    () => {
                        // Success handling
                        this.fetchPatrolRoutes(); // Reload patrol routes after update
                    },
                    error => {
                        console.error('Error updating patrol route:', error);
                    }
                );
            }
        });
    }

    confirmDelete(routeId: string): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                // Delete patrol route logic here, e.g., call API
                this.patrolRouteService.deletePatrolRoute(routeId).subscribe(
                    () => {
                        // Success handling
                        this.fetchPatrolRoutes(); // Reload patrol routes after deletion
                    },
                    error => {
                        console.error('Error deleting patrol route:', error);
                    }
                );
            }
        });
    }
}
