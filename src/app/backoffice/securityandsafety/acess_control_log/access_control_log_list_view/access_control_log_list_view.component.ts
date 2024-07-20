import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccessControlLogService } from '../../../../service/accesslog.service';
import { UpdateLogDialogComponent } from './update-log-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';

export interface Logs {
    id: string;
    personName: string;
    location: string;
    time: string;
    entryType: string;
}

@Component({
    selector: 'app-access-control-log-list',
    templateUrl: './access_control_log_list_view.component.html',
    styleUrls: ['./access_control_log_list_view.component.scss']
})
export class AccessControlLogListComponent implements OnInit {

    displayedColumns: string[] = ['personName', 'location', 'time', 'entryType', 'actions']; // Removed 'id'
    dataSource: Logs[] = [];

    constructor(private logService: AccessControlLogService, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.loadAllLogs();
    }

    loadAllLogs(): void {
        this.logService.getAllAccessControlLogs()
            .subscribe(
                data => {
                    this.dataSource = data;
                },
                error => {
                    console.error('Error loading logs: ', error);
                }
            );
    }

    openUpdateDialog(log: Logs): void {
        const dialogRef = this.dialog.open(UpdateLogDialogComponent, {
            width: '500px',
            data: log
        });

        dialogRef.afterClosed().subscribe(result => {
            // Handle dialog close
            if (result) {
                // Handle dialog result if needed
            }
        });
    }

    confirmDelete(id: string): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.logService.deleteAccessControlLog(id).subscribe(
                    () => {
                        this.loadAllLogs(); // Reload logs after deletion
                    },
                    error => {
                        console.error('Error deleting log: ', error);
                    }
                );
            }
        });
    }
}
