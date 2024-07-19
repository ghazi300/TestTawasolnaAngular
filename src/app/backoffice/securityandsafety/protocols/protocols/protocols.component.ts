// protocols.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { UpdateProtocolDialogComponent } from './update-protocol-dialog.component';
import {ProtocolService} from "../../../../service/protocol.service";

export interface Protocol {
  id: string;
  title: string;
  description: string;
  steps: string[];
  lastUpdated: string; // Assuming you handle date format appropriately from backend
  responsiblePerson: string;
}
@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})
export class ProtocolsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'lastUpdated', 'actions'];
  dataSource: Protocol[] = [];

  constructor(private router: Router, private dialog: MatDialog, private protocolService: ProtocolService) { }

  ngOnInit(): void {
    this.fetchProtocols();
  }

  fetchProtocols(): void {
    this.protocolService.getAllProtocols().subscribe(
        (protocols: Protocol[]) => {
          this.dataSource = protocols;
        },
        error => {
          console.error('Error fetching protocols:', error);
          // Handle error, e.g., show a snackbar or error message
        }
    );
  }

  openUpdateDialog(protocol: Protocol): void {
    const dialogRef = this.dialog.open(UpdateProtocolDialogComponent, {
      width: '500px',
      data: { ...protocol }
    });

    dialogRef.afterClosed().subscribe(updatedProtocol => {
      if (updatedProtocol) {
        // Update protocol logic here, e.g., call API
        this.protocolService.updateProtocol(updatedProtocol.id, updatedProtocol).subscribe(
            () => {
              // Success handling
              this.fetchProtocols(); // Reload protocols after update
            },
            error => {
              console.error('Error updating protocol:', error);
            }
        );
      }
    });
  }

  confirmDelete(protocolId: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete protocol logic here, e.g., call API
        this.protocolService.deleteProtocol(protocolId).subscribe(
            () => {
              // Success handling
              this.fetchProtocols(); // Reload protocols after deletion
            },
            error => {
              console.error('Error deleting protocol:', error);
            }
        );
      }
    });
  }
}
