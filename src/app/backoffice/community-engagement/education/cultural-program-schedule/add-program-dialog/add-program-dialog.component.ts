import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CulturalProgramService} from "../../../../../services/services/cultural-program.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";

export function endDateValidator(startDateControl: AbstractControl): ValidatorFn {
  return (endDateControl: AbstractControl): { [key: string]: boolean } | null => {
    if (startDateControl.value && endDateControl.value) {
      const startDate = new Date(startDateControl.value);
      const endDate = new Date(endDateControl.value);
      return endDate < startDate ? {'endDateInvalid': true} : null;
    }
    return null;
  };
}

@Component({
  selector: 'app-add-program-dialog',
  templateUrl: './add-program-dialog.component.html',
  styleUrls: ['./add-program-dialog.component.scss']
})
export class AddProgramDialogComponent implements OnInit{
  name: string = '';
  description: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  location: string = '';
  coordinator: string = '';
  programForm!: FormGroup;



  constructor(
      public dialogRef: MatDialogRef<AddProgramDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private culturalProgramService: CulturalProgramService,
      private snackBar: MatSnackBar,
      private fb: FormBuilder,

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.programForm.valid) {


      this.culturalProgramService.addProgram(this.programForm.value).subscribe({
        next: (response) => {
          this.dialogRef.close(response);
          this.snackBar.open('Program added successfully', 'Close', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error adding program:', error);
          this.snackBar.open('Failed to add program', 'Close', { duration: 3000 });
        }
      });
    }
  }

  ngOnInit(): void {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      startDate: [{ value: this.data.date, disabled: true }, Validators.required],
      endDate: ['', [Validators.required, endDateValidator(this.fb.control(this.data.date))]],
      location: ['', Validators.required],
      coordinator: ['', Validators.required]
    });


    this.programForm.patchValue({ startDate: this.data.date});
  }


}
