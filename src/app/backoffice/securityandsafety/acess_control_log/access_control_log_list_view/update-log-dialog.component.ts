import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Logs} from "./access_control_log_list_view.component";

@Component({
    selector: 'app-update-log-dialog',
    templateUrl: './update-log-dialog.component.html',
    styleUrls: ['./update-log-dialog.component.scss']
})
export class UpdateLogDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<UpdateLogDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Logs
    ) { }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        // Convert time to appropriate format before sending to backend
        this.data.time = new Date(this.data.time).toISOString();
        this.dialogRef.close(this.data);
    }
}
