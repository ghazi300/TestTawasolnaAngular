import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SimulationService } from 'src/app/service/simulation.service';
import { PlanUrgenceService } from 'src/app/service/plan-urgence.service';

@Component({
  selector: 'app-simulation-dialog',
  templateUrl: './simulation-dialog.component.html',
  styleUrls: ['./simulation-dialog.component.scss']
})
export class SimulationDialogComponent implements OnInit {
  simulationForm: FormGroup;
  plansUrgence: any[] = [];

  constructor(
    private fb: FormBuilder,
    private simulationService: SimulationService,
    private planUrgenceService: PlanUrgenceService,
    public dialogRef: MatDialogRef<SimulationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.simulationForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      planUrgence: [null, Validators.required] // pour lier le plan d'urgence
    });
  }

  ngOnInit(): void {
    this.planUrgenceService.getPlans().subscribe((plans) => {
      this.plansUrgence = plans;
    });

    if (!this.data.isNew) {
      this.simulationService.getSimulationById(this.data.id).subscribe((simulation) => {
        this.simulationForm.patchValue(simulation);
      });
    }
  }

  onSave(): void {
    if (this.simulationForm.valid) {
      if (this.data.isNew) {
        this.simulationService.createSimulation(this.simulationForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.simulationService.updateSimulation(this.data.id, this.simulationForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
