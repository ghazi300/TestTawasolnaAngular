import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentFormComponent } from '../../incident-form/incident-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(IncidentFormComponent, {
      width: '50%',
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
    });
  }
}
