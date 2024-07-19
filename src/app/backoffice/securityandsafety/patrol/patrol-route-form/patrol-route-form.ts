import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {PatrolRouteService} from "../../../../service/patrolroute.service";
import {PatrolRoute} from "../patrol-route-list/patrol-route-list";



@Component({
    selector: 'app-patrol-route-form',
    templateUrl: './patrol-route-form.html',
})
export class PatrolRouteFormComponent {
    patrolRouteForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private patrolRouteService: PatrolRouteService,
        private snackBar: MatSnackBar
    ) {
        this.patrolRouteForm = this.fb.group({
            officerName: ['', Validators.required],
            routeDetails: ['', Validators.required],
            startTime: ['', Validators.required],
            endTime: ['', Validators.required],
        });
    }

    onBack(): void {
        this.router.navigate(['/backoffice/securityandsafety']);
    }

    onSubmit(): void {
        if (this.patrolRouteForm.invalid) {
            return;
        }

        const patrolRoute: PatrolRoute = this.patrolRouteForm.value;
        this.patrolRouteService.createPatrolRoute(patrolRoute).subscribe(
            () => {
                this.snackBar.open('Patrol Route created successfully!', 'Close', { duration: 3000 });
                this.patrolRouteForm.reset();
                // Optionally navigate back or reset the form
            },
            error => {
                console.error('Error creating patrol route:', error);
                this.snackBar.open('Error creating patrol route. Please try again.', 'Close', { duration: 3000 });
            }
        );
    }
}
