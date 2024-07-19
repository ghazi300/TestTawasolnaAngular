import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    template: `
        <h1 mat-dialog-title>Confirm Deletion</h1>
        <div mat-dialog-content>Are you sure you want to delete this log?</div>
        <div mat-dialog-actions align="end">
            <button mat-button mat-dialog-close color="primary" (click)="onCancel()">Cancel</button>
            <button mat-button mat-dialog-close color="warn" (click)="onConfirm()">Delete</button>
        </div>
    `,
    styles: [
        `
          .mat-dialog-actions {
            padding-top: 20px;
            justify-content: flex-end;
          }
        `
    ]
})
export class ConfirmDialogComponent {

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

    onCancel(): void {
        this.dialogRef.close(false);
    }

    onConfirm(): void {
        this.dialogRef.close(true);
    }
}
