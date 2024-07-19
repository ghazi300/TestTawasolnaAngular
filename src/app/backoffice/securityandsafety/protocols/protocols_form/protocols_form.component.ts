import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProtocolService } from '../../../../service/protocol.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Protocol {
    title: string;
    description: string;
    steps: string[];
    responsiblePerson: string;
}

@Component({
    selector: 'app-protocols_form',
    templateUrl: './protocols_form.component.html',
})
export class ProtocolsFormComponent {
    protocolForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private protocolService: ProtocolService,
        private snackBar: MatSnackBar
    ) {
        this.protocolForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            steps: ['', Validators.required], // This can be an array input or a textarea depending on UI design
            responsiblePerson: ['', Validators.required]
        });
    }

    onBack(): void {
        this.router.navigate(['/flexy/home']);
    }

    onSubmit(): void {
        if (this.protocolForm.invalid) {
            return;
        }

        // Convert multiline string to array of strings
        const stepsArray = this.protocolForm.value.steps.split('\n').map((step: string) => step.trim());

        // Update form value with the array
        this.protocolForm.patchValue({ steps: stepsArray });

        this.protocolService.createProtocol(this.protocolForm.value).subscribe(
            () => {
                this.snackBar.open('Protocol created successfully!', 'Close', { duration: 3000 });
                // Optionally navigate back or reset the form
            },
            error => {
                console.error('Error creating protocol:', error);
                this.snackBar.open('Error creating protocol. Please try again.', 'Close', { duration: 3000 });
            }
        );
    }
}
