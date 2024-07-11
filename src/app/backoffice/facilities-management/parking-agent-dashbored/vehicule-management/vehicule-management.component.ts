import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EntryVehiculeFormComponent } from './entry-vehicule-form/entry-vehicule-form.component';
export interface VehiculeElement {
  Registrationnumber: string;
  Vcategory: string;
  ownerfullname: string;
  ownercontact: string;
  stationnumber: string;
  entrydatetime: string;
  outdatetime: string;
  status?: string;
}

const ELEMENT_DATA: VehiculeElement[] = [
  {  
    Registrationnumber: 'ABC123',
    Vcategory: 'SUV',
    ownerfullname: 'John Doe',
    ownercontact: '123-456-7890',
    stationnumber: 'A1',
    entrydatetime: '2024-07-11T10:00',
    outdatetime: '2024-07-11T12:00',
    status: 'In'
  },
  {  
    Registrationnumber: 'XYZ456',
    Vcategory: 'Compact',
    ownerfullname: 'Jane Smith',
    ownercontact: '987-654-3210',
    stationnumber: 'B2',
    entrydatetime: '2024-07-11T09:30',
    outdatetime: '2024-07-11T11:45',
    status: 'Out'
  },
  {  
    Registrationnumber: 'DEF789',
    Vcategory: 'Van',
    ownerfullname: 'Michael Johnson',
    ownercontact: '555-123-4567',
    stationnumber: 'C3',
    entrydatetime: '2024-07-11T11:15',
    outdatetime: '2024-07-11T13:30',
    status: 'In'
  },
  {  
    Registrationnumber: 'GHI456',
    Vcategory: 'SUV',
    ownerfullname: 'Emily Davis',
    ownercontact: '333-222-1111',
    stationnumber: 'A1',
    entrydatetime: '2024-07-11T08:45',
    outdatetime: '2024-07-11T10:30',
    status: 'Out'
  },
  {  
    Registrationnumber: 'JKL123',
    Vcategory: 'Compact',
    ownerfullname: 'Chris Wilson',
    ownercontact: '999-888-7777',
    stationnumber: 'B2',
    entrydatetime: '2024-07-11T12:00',
    outdatetime: '2024-07-11T14:00',
    status: 'In'
  },
  {  
    Registrationnumber: 'MNO789',
    Vcategory: 'SUV',
    ownerfullname: 'Jessica Brown',
    ownercontact: '777-666-5555',
    stationnumber: 'C3',
    entrydatetime: '2024-07-11T10:30',
    outdatetime: '2024-07-11T12:45',
    status: 'Out'
  }
];

@Component({
  selector: 'app-vehicule-management',
  templateUrl: './vehicule-management.component.html',
  styleUrls: ['./vehicule-management.component.scss']
})
export class VehiculeManagementComponent implements OnInit{
  displayedColumns: string[] = [ 'Registrationnumber', 'Vcategory', 'ownerfullname', 'ownercontact', 'stationnumber', 'entrydatetime', 'outdatetime', 'status','action'];
  dataSource = new MatTableDataSource<VehiculeElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addentryvehiculedialog(): void {
    const dialogRef = this.dialog.open(EntryVehiculeFormComponent, {
      width: '500px',
      disableClose: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        const now = new Date();
        const entryDate = new Date(result.entrydatetime);
        const outDate = new Date(result.outdatetime);
        const status = (now >= entryDate && now <= outDate) ? 'In' : 'Out';

        this.dataSource.data.push({
          Registrationnumber: result.Registrationnumber,
          Vcategory: result.Vcategory,
          ownerfullname: result.ownerfullname,
          ownercontact: result.ownercontact,
          stationnumber: result.stationnumber,
          entrydatetime: result.entrydatetime,
          outdatetime: result.outdatetime,
          status: status 
        });

        this.dataSource.paginator = this.paginator;
      }
    });
    
  }
  getStatusStyle(element: VehiculeElement): object {
    return {
      'color': element.status === 'In' ? 'green' : 'red'
    };
  }
  updateVehicle(vehicle: VehiculeElement): void {
    console.log('Update vehicle:', vehicle);
  }

  deleteVehicle(vehicle: VehiculeElement): void {
    if (confirm(`Are you sure you want to delete vehicle ${vehicle.Registrationnumber}?`)) {
      console.log('Delete vehicle:', vehicle);
      const index = this.dataSource.data.indexOf(vehicle);
      if (index > -1) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  assignVehicle(vehicle: VehiculeElement): void {
    console.log('Assign vehicle:', vehicle);
  }
}
