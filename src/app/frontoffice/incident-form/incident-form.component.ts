import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentService } from 'src/app/service/incident.service'; 
import { AlertService } from 'src/app/service/alert.service';
import { MAT_SELECT_CONFIG, MatSelectConfig } from '@angular/material/select';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss'],
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: {
        overlayPanelClass: 'custom-select-overlay'
      } as MatSelectConfig
    }
  ]
})
export class IncidentFormComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();

  incidentForm: FormGroup;
  graviteOptions: string[] = ['FAIBLE', 'MOYENNE', 'ELEVEE'];

  constructor(
    private fb: FormBuilder,
    private incidentService: IncidentService,
    private alertService: AlertService
  ) {
    this.incidentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      gravite: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.incidentForm.valid) {
      const incidentPayload: any = this.incidentForm.value;
      this.incidentService.createIncident(incidentPayload).subscribe(
        (response) => {
          console.log('Incident created:', response);
          this.alertService.showSuccess('Incident created successfully!');
          this.closeModal.emit(); // Emit event to close modal
        },
        (error) => {
          console.error('Error creating incident:', error);
          this.alertService.showError('Error creating incident.');
        }
      );
    }
  }

  onCancel(): void {
    this.incidentForm.reset();
    this.closeModal.emit(); // Emit event to close modal
  }
}
