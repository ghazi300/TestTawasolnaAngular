import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  resourceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.resourceForm.valid) {
      this.formSubmit.emit(this.resourceForm.value);
    }
  }

  onCancel() {
    this.formCancel.emit();
  }
}