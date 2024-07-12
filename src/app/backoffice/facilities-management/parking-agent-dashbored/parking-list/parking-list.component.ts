import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  status: string;
  badgeClass:string
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name : ' Station A1', status: 'occupied',badgeClass: 'badge-danger'  },
    { name: ' Station A2', status: 'available' ,badgeClass: 'badge-success'},
    { name: ' Station B1', status: 'available',badgeClass: 'badge-success' },
    { name: ' Station B2', status: 'available',badgeClass: 'badge-success' },
    { name: 'Station C1', status: 'available',badgeClass: 'badge-success' },
    { name: ' Station C2', status: 'available',badgeClass: 'badge-success' },
];
@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent {
  displayedColumns: string[] = [ 'name', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
