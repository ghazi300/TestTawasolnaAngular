import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddInitiativeDialogComponent} from "./add-initiative-dialog/add-initiative-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DiversityinitiativeService} from "../../../../services/services/diversityinitiative.service";

export enum DiversityInitiativeStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD',
  CANCELLED = 'CANCELLED',
  NEEDS_REVIEW = 'NEEDS_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  UNDER_EVALUATION = 'UNDER_EVALUATION'
}
export interface Initiative {
  id: string;
  title: string;
  description: string;
  lead: string;
  startDate: Date;
  endDate: Date;
  status: DiversityInitiativeStatus;
}


// const ELEMENT_DATA: Initiative[] = [
//   { id: 1, name: 'Initiative 1', description: 'Description 1', budget: '$10,000', status: 'Active' },
//   { id: 2, name: 'Initiative 2', description: 'Description 2', budget: '$25,000', status: 'Inactive' },
//   { id: 3, name: 'Initiative 3', description: 'Description 3', budget: '$15,000', status: 'Active' },
//   { id: 4, name: 'Initiative 4', description: 'Description 4', budget: '$5,000', status: 'Active' },
// ];

@Component({
  selector: 'app-diversity-initiatives',
  templateUrl: './diversity-initiatives.component.html',
  styleUrls: ['./diversity-initiatives.component.scss']
})
export class DiversityInitiativesComponent {
  displayedColumns: string[] = ['id', 'title', 'description', 'lead', 'startDate', 'endDate', 'status', 'actions'];
  dataSource: Initiative[] = [];


  constructor( public dialog: MatDialog,
               private diversityInitiativeService: DiversityinitiativeService,
               private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadInitiatives();
  }


  openAddInitiativeDialog(): void {
    const dialogRef = this.dialog.open(AddInitiativeDialogComponent, {
      width: '500px',
      disableClose: false // Prevent closing by clicking outside the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

          this.loadInitiatives();
          // Add new initiative to the list without refreshing

          this.snackBar.open('Initiative added successfully', 'Close', { duration: 3000 });

      }
    });
  }

  deleteInitiative(id: string): void {
    this.diversityInitiativeService.deleteInitiative(id).subscribe(
        () => {
          this.dataSource = this.dataSource.filter(initiative => initiative.id !== id);
          this.snackBar.open('Initiative deleted successfully', 'Close', { duration: 3000 });
        },
        error => {
          console.error('Error deleting initiative', error);
          this.snackBar.open('Error deleting initiative', 'Close', { duration: 3000 });
        }
    );
  }

  private loadInitiatives() {
    this.diversityInitiativeService.getAllInitiatives().subscribe(
        (initiatives: Initiative[]) => {
          this.dataSource = initiatives;
          console.log(this.dataSource)
        },
        error => {
          console.error('Error loading initiatives', error);
        }
    );
  }
}
