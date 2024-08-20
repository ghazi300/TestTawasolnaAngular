import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanUrgenceService } from 'src/app/service/plan-urgence.service'; // Ajustez le chemin selon vos besoins

@Component({
  selector: 'app-plan-urgence-form',
  templateUrl: './plan-urgence-form.component.html',
  styleUrls: ['./plan-urgence-form.component.scss']
})
export class PlanUrgenceFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  planForm: FormGroup;

  constructor(private fb: FormBuilder, private planService: PlanUrgenceService) {
    this.planForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      etapes: [''],
      ressourcesNecessaires: ['']
    });
  }

  onSubmit() {
    if (this.planForm.valid) {
      this.planService.createPlan(this.planForm.value).subscribe(
        (data) => {
          this.formSubmit.emit(data);
        },
        (error) => {
          console.error('Error adding plan:', error);
        }
      );
    }
  }

  onCancel() {
    this.formCancel.emit();
  }
}
