import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary forms modules
import { AccessControlLogService } from '../../../../service/accesslog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-access_control_log_form',
    templateUrl: './access_control_log_form.component.html',
})
export class Access_control_log_formComponent {
    logForm: FormGroup; // Define FormGroup for the form

    constructor(
        private router: Router,
        private fb: FormBuilder, // Inject FormBuilder
        private logService: AccessControlLogService,
        private snackBar: MatSnackBar
    ) {
        this.logForm = this.fb.group({
            entryType: ['', Validators.required],
            personName: ['', Validators.required],
            location: ['', Validators.required],
            time: ['', Validators.required],
        });
    }

    // Convenience getter for easy access to form fields
    get f() {
        return this.logForm.controls;
    }

    onBack(): void {
        this.router.navigate(['/flexy/logs-list']);
    }

    onSubmit(): void {
        // Stop here if form is invalid
        if (this.logForm.invalid) {
            return;
        }

        this.logService.createAccessControlLog(this.logForm.value).subscribe(
            () => {
                this.snackBar.open('Log created successfully!', 'Close', { duration: 3000 });
                // Optionally navigate back to the list view or reset the form
            },
            error => {
                console.error('Error creating log:', error);
                this.snackBar.open('Error creating log. Please try again.', 'Close', { duration: 3000 });
            }
        );
    }
}
