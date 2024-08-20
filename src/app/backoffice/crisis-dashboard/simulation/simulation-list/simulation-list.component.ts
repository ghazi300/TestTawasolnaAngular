import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/service/simulation.service';
import { MatDialog } from '@angular/material/dialog';
import { SimulationDialogComponent } from '../simulation-dialog/simulation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.scss']
})
export class SimulationListComponent implements OnInit {
  simulations: any[] = [];

  constructor(private simulationService: SimulationService, private dialog: MatDialog,private router:Router) {}

  ngOnInit(): void {
    this.loadSimulations();
  }

  loadSimulations(): void {
    this.simulationService.getSimulations().subscribe((data) => {
      this.simulations = data;
    });
  }

  openCreateSimulationDialog(): void {
    const dialogRef = this.dialog.open(SimulationDialogComponent, {
      width: '400px',
      data: { isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadSimulations();
      }
    });
  }

  openEditSimulationDialog(id: string): void {
    const dialogRef = this.dialog.open(SimulationDialogComponent, {
      width: '400px',
      data: { isNew: false, id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadSimulations();
      }
    });
  }

  deleteSimulation(id: string): void {
    this.simulationService.deleteSimulation(id).subscribe(() => {
      this.loadSimulations();
    });
  }
  voirCalendrier(){
    this.router.navigate(['admin/crisis/simulation/calendar'])
  }
}
