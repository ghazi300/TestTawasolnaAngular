import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEquipmentFormComponent} from "../add-equipment-form/add-equipment-form.component";
export interface Equipment {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA: Equipment[] = [
  { id: 1, name: 'Equipment 1', work: 'Work 1', project: 'Project 1', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
  { id: 2, name: 'Equipment 2', work: 'Work 2', project: 'Project 2', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  { id: 3, name: 'Equipment 3', work: 'Work 3', project: 'Project 3', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  { id: 4, name: 'Equipment 4', work: 'Work 4', project: 'Project 4', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'work', 'project', 'priority', 'budget', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openAddEquipmentDialog() {
    const dialogRef = this.dialog.open(AddEquipmentFormComponent, {
      width: '500px',
      disableClose: false, // Prevent closing by clicking outside the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}