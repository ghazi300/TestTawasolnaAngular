import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DiversityInitiativeStatus} from "../diversity-initiatives.component";
import {DiversityinitiativeService} from "../../../../../services/services/diversityinitiative.service";

@Component({
  selector: 'app-add-initiative-dialog',
  templateUrl: './add-initiative-dialog.component.html',
  styleUrls: ['./add-initiative-dialog.component.scss']
})
export class AddInitiativeDialogComponent {
  initiativeForm: FormGroup;
  statusOptions = Object.values(DiversityInitiativeStatus);

  constructor(
      public dialogRef: MatDialogRef<AddInitiativeDialogComponent>,
      private fb: FormBuilder,
      private diversityInitiativeService: DiversityinitiativeService
  ) {
    this.initiativeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      lead: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.initiativeForm.valid) {
      const newInitiative = this.initiativeForm.value;
      this.diversityInitiativeService.addInitiative(newInitiative).subscribe(() => {
        this.dialogRef.close(newInitiative);
      });
    }
  }

}
