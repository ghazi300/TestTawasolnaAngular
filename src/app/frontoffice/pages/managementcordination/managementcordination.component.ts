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
      residentName: ['', Validators.required],
      cleanliness: ['', Validators.required],
      security: ['', Validators.required],
      amenities: ['', Validators.required],
      maintenance: ['', Validators.required],
      management: ['', Validators.required]

    });
  }
  submitted = false;

  submitOpinions() {
    if (this.opinionForm.valid) {
      const formData = this.opinionForm.value;
      this.submitted = true;

       this.http.post('http://localhost:9003/tawasalna-relations/api/surveys', formData).subscribe(
         response => {
           console.log('Form submitted successfully', response);
           this.opinionForm.reset();

         },
       error => {
          console.error('Error submitting form', error);
        }
       );
    } 
  }
}
