import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  displayedColumns: string[] = [ 'stationNumber', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private _parkinglotservice: ParkinnagentserviceService,private _snackBar: MatSnackBar) { }

  getAll(): void {
    this._parkinglotservice.getAllParkingSubSpace().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
  
        if (!data || data.length === 0) {
          this._snackBar.open('There is no data. Add one!', 'Close');
        }
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this._snackBar.open('Failed to fetch data', 'Close');
      },
    });
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.dataSource);

   
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
