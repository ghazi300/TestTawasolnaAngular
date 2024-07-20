import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Protocol } from './protocols.component';

@Component({
    selector: 'app-update-protocol-dialog',
    templateUrl: './update-protocol-dialog.component.html',
    styleUrls: ['./update-protocol-dialog.component.scss']
})
export class UpdateProtocolDialogComponent {
    separatorKeysCodes: number[] = [13, 188]; // Define the separator key codes for matChipInputSeparatorKeyCodes

    constructor(
        public dialogRef: MatDialogRef<UpdateProtocolDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Protocol
    ) { }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        // Implement logic to save updated protocol, e.g., call backend API
        // Close dialog with updated data if needed
        this.dialogRef.close(this.data);
    }

    addStep(event: any): void {
        const input = event.input;
        const value = event.value;

        // Add the step
        if ((value || '').trim()) {
            this.data.steps.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
}
