import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Incident } from '../../../../service/incident-tawasalna.service';

@Component({
    selector: 'app-update-incident-dialog',
    templateUrl: './update-incident-dialog.component.html',
    styleUrls: ['./update-incident-dialog.component.scss']
})
export class UpdateIncidentDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<UpdateIncidentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public incident: Incident
    ) { }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        this.dialogRef.close(this.incident);
    }
}
