import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEquipmentFormComponent} from "../add-equipment-form/add-equipment-form.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EquipementService} from "../../../../services/services/equipement.service";
export interface Equipment {
  id: string;
  name: string;
  description: string;
  location: string;
}



@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'description', 'location', 'actions'];
  dataSource: Equipment[] = [];

  constructor( public dialog: MatDialog,
               private equipmentService: EquipementService,
               private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.loadEquipment();
  }

  openAddEquipmentDialog() {
    const dialogRef = this.dialog.open(AddEquipmentFormComponent, {
      width: '500px',
      disableClose: false, // Prevent closing by clicking outside the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.loadEquipment();
          this.snackBar.open('Equipment added successfully', 'Close', { duration: 3000 });

      }
    });
  }
  deleteEquipment(id: string): void {
    this.equipmentService.deleteEquipment(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(equipment => equipment.id !== id);
      this.snackBar.open('Equipment deleted successfully', 'Close', { duration: 3000 });
    });
  }

  private loadEquipment() {
    this.equipmentService.getAllEquipment().subscribe(
        (equipment: Equipment[]) => {
          this.dataSource = equipment;
        },
        error => {
          console.error('Error loading equipment', error);
        }
    );
  }
}
