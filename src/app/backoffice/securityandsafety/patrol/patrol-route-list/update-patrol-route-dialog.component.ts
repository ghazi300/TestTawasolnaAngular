import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {PatrolRoute} from "./patrol-route-list";

@Component({
    selector: 'app-update-patrol-route-dialog',
    templateUrl: './update-patrol-route-dialog.component.html',
    styleUrls: ['./update-patrol-route-dialog.component.scss']
})
export class UpdatePatrolRouteDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<UpdatePatrolRouteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PatrolRoute
    ) { }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        // Implement logic to save updated patrol route, e.g., call backend API
        // Close dialog with updated data if needed
        this.dialogRef.close(this.data);
    }
}
