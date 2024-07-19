import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentService } from '../../../../service/incident-tawasalna.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-incident-report-form',
    templateUrl: './incident_report_form.component.html',
    styleUrls: ['./incident_report_form.component.scss']
})
export class IncidentReportFormComponent implements OnInit {
    incidentForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private incidentService: IncidentService,
        private snackBar: MatSnackBar // Inject MatSnackBar
    ) {
        this.incidentForm = this.fb.group({
            description: ['', [Validators.required, Validators.maxLength(500)]],
            location: ['', [Validators.required, Validators.maxLength(200)]],
            time: ['', Validators.required],
            category: ['', Validators.required],
            status: ['', Validators.required]
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        if (this.incidentForm.valid) {
            this.incidentService.createIncident(this.incidentForm.value).subscribe(
                () => {
                    this.snackBar.open('Incident reported successfully!', 'Close', { duration: 3000 });
                    this.router.navigate(['/incidents']);
                },
                error => {
                    console.error('Error reporting incident:', error);
                    this.snackBar.open('Error reporting incident. Please try again.', 'Close', { duration: 3000 });
                }
            );
        }
    }

    onBack(): void {
        this.router.navigate(['/incidents']);
    }
}
