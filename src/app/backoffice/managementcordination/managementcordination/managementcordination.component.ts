

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-managementcordination',
  templateUrl: './managementcordination.component.html',
  styleUrls: ['./managementcordination.component.scss']
})
export class ManagementcordinationComponent {
  opinionForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.opinionForm = this.fb.group({
      cleanliness: ['', Validators.required],
      security: ['', Validators.required],
      amenities: ['', Validators.required],
      maintenance: ['', Validators.required],
      management: ['', Validators.required]
    });
  }

  submitOpinions() {
    if (this.opinionForm.valid) {
      const formData = this.opinionForm.value;

      // this.http.post('YOUR_BACKEND_URL', formData).subscribe(
      //   response => {
      //     console.log('Form submitted successfully', response);
      //   },
      //   error => {
      //     console.error('Error submitting form', error);
      //   }
      // );
    } else {
      // Form is invalid, handle error or show validation messages.
    }
  }
}