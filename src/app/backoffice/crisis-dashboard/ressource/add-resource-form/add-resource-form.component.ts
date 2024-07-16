import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { ResourceService } from 'src/app/service/resource.service'; // Adjust the path as needed

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  resourceForm: FormGroup;

  constructor(private fb: FormBuilder, private resourceService: ResourceService,private as:AlertService) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.resourceForm.valid) {
      this.resourceService.createResource(this.resourceForm.value).subscribe(
        (response) => {
          this.as.showSuccess('Resource created successfully!');
          this.formSubmit.emit(response);
          this.resourceForm.reset();
        },
        (error) => {
          this.as.showError('Error creating resource.');
          console.error('Error creating resource:', error);
        }
      );
    }
  }

  onCancel() {
    this.formCancel.emit();
  }
}
