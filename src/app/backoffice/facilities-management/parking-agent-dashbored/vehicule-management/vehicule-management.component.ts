import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EntryVehiculeFormComponent } from './entry-vehicule-form/entry-vehicule-form.component';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-vehicule-management',
  templateUrl: './vehicule-management.component.html',
  styleUrls: ['./vehicule-management.component.scss']
})
export class VehiculeManagementComponent implements OnInit{
  displayedColumns: string[] = ['stationNumber','vehiculecategory', 'endTime', 'startTime',  'status','vehicleNumber', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private _parkinglotservice: ParkinnagentserviceService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
   getAll(): void {
    this._parkinglotservice.getAllParkingAllocation().subscribe({
      next: (data: any[]) => {
        this.dataSource.data = data; 
        if (!data || data.length === 0) {
          this._snackBar.open('There is no data. Add one!', 'Close');
        }
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
        this._snackBar.open('Failed to fetch data', 'Close');
      }
    });
  }



  addentryvehiculedialog(): void {
    const dialogRef = this.dialog.open(EntryVehiculeFormComponent, {
      width: '500px',
      disableClose: false,
      data: {}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   if (result) {
    //     const now = new Date();
    //     const entryDate = new Date(result.entrydatetime);
    //     const outDate = new Date(result.outdatetime);
    //     const status = (now >= entryDate && now <= outDate) ? 'In' : 'Out';

    //     this.dataSource.data.push({
    //       Registrationnumber: result.Registrationnumber,
    //       Vcategory: result.Vcategory,
    //       ownerfullname: result.ownerfullname,
    //       ownercontact: result.ownercontact,
    //       stationnumber: result.stationnumber,
    //       entrydatetime: result.entrydatetime,
    //       outdatetime: result.outdatetime,
    //       status: status 
    //     });

    //     this.dataSource.paginator = this.paginator;
    //   }
    // });
    
  }
  getStatusStyle(element: any): object {
    return {
      'color': element.status === 'In' ? 'green' : 'red'
    };
  }
  updateVehicle(vehicle: any): void {
    console.log('Update vehicle:', vehicle);
  }

  deleteVehicle(vehicle: any): void {
    // if (confirm(`Are you sure you want to delete vehicle ${vehicle.Registrationnumber}?`)) {
    //   console.log('Delete vehicle:', vehicle);
    //   const index = this.dataSource.data.indexOf(vehicle);
    //   if (index > -1) {
    //     this.dataSource.data.splice(index, 1);
    //     this.dataSource.paginator = this.paginator;
    //   }
    // }
  }

   assignVehicle(vehicle: any): void {
  //   console.log('Assign vehicle:', vehicle);
}
}
