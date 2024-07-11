import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Occupied', badge: 'badge-info', budget: '$3.9k',action :'Occupied' },
  { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Reserved', badge: 'badge-primary', budget: '$24.5k',action: 'Occupied'},
  { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'Available', badge: 'badge-success', budget: '$12.8k',action:'asign' },
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},
  { id: 3, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Available', badge: 'badge-success', budget: '$2.4k',action: 'asign'},

];
@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent {
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
