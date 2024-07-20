import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParkinnagentserviceService } from 'src/app/service/parkinnagentservice.service';

@Component({
  selector: 'app-add-edit-parkinglot',
  templateUrl: './add-edit-parkinglot.component.html',
  styleUrls: ['./add-edit-parkinglot.component.scss']
})
export class AddEditParkinglotComponent {
name: string = '';
loacation: string = '';
totalspace: number | null = null;

constructor(
  private _parkinglotservice: ParkinnagentserviceService,
  public dialogRef: MatDialogRef<AddEditParkinglotComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,private _snackBar: MatSnackBar
) {
  if (data) {
    this.name = data.name;
    this.loacation = data.loacation;
    this.totalspace = data.totalspace;
  }
}

cancel(): void {
  this.dialogRef.close();
}

save(): void {
  const parkingLot = {
    name: this.name,
    loacation: this.loacation,
    totalspace: this.totalspace
  };

    this._parkinglotservice.addparkinglot(parkingLot).subscribe({
      next: () => {this.dialogRef.close(parkingLot);
      this._snackBar.open('Parking Lot add successfully', 'Close', {
        duration: 3000
      });},
      error: (err) => {console.error('Failed to add parking lot:', err)


      }
    });

}
update(): void {
  const parkingLot = {
    name: this.name,
    loacation: this.loacation,
    totalspace: this.totalspace
  };

  if ( this.data.parkinglotid) {
    this._parkinglotservice.updateparkinglot(this.data.parkinglotid, parkingLot).subscribe({
      next: () => {this.dialogRef.close(parkingLot);
        this._snackBar.open('Parking Lot updated successfully', 'Close', {
          duration: 3000
        });
      },
      error: (err) => console.error('Failed to update parking lot:', err)
    });
  }
}

Click() {
  if ( this.data.parkinglotid) {
    this.update();
  } else {
    this.save();
  }
}
}
