import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddEditParkinglotComponent } from './add-edit-parkinglot/add-edit-parkinglot.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss']
})

export class ParkingLotComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [ 'name', 'loacation', 'totalspace','action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   constructor(public dialog: MatDialog,private _parkinglotservice:ParkinnagentserviceService,private _snackBar: MatSnackBar,private router: Router){}

   getAll(): void {
    this._parkinglotservice.getAllParkingLot().subscribe({
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





  adddialog(){
    const dialogRef = this.dialog.open(AddEditParkinglotComponent, {
      width: '500px',
      disableClose: false,
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource.paginator = this.paginator;
  
        this.getAll();
      }
    });
   
  }
  updateparkinglot(parkingLot: any): void {
    const dialogRef = this.dialog.open(AddEditParkinglotComponent, {
      width: '500px',
      disableClose: false,
      data: { ...parkingLot } 
    });
    console.log(dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
      
        const index = this.dataSource.data.findIndex(item => item.id === result.id);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  deleteparkinglot(body: any): void {
    const isConfirmed = confirm(`Are you sure you want to delete the Parking Lot : ${body.name}?`);
  
    if (isConfirmed) {
      console.log('Delete :', body);
      const index = this.dataSource.data.indexOf(body);
      if (index > -1) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.paginator = this.paginator;
      }
  
      this._parkinglotservice.deleteParkingLot(body.parkinglotid).subscribe(
        (response) => {
          this.getAll(); 
          this._snackBar.open('Parking Lot deleted successfully', 'Close', {
            duration: 3000
          });
        },
        (error) => {
          console.error('Error deleting parking lot:', error);
         
        }
      );
    }else {
      this._snackBar.open('Operation canceled.', 'Close', {
        duration: 3000
      });}
  }
  

}
