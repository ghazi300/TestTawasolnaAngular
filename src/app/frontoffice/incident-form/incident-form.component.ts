import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent {
  @Output() closeModal = new EventEmitter<void>();
  incidentForm: FormGroup;
  uploadedFiles: File[] = [];
  filePreviewUrls: { [key: string]: string } = {};
  fileContents: { [key: string]: string } = {};

  constructor(private fb: FormBuilder) {
    this.incidentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      gravite:['',Validators.required],
      fileUpload: [null]
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    for (let file of files) {
      this.uploadedFiles.push(file);
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (this.isImage(file)) {
          this.filePreviewUrls[file.name] = e.target.result;
        } else {
          const textContent = e.target.result as string;
          this.fileContents[file.name] = textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
        }
      };

      if (this.isImage(file)) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }

  removeFile(file: File) {
    const index = this.uploadedFiles.indexOf(file);
    if (index > -1) {
      this.uploadedFiles.splice(index, 1);
      delete this.filePreviewUrls[file.name];
      delete this.fileContents[file.name];
    }
  }

  onSubmit() {
    if (this.incidentForm.valid) {
      const formData = new FormData();
      formData.append('title', this.incidentForm.get('title')?.value);
      formData.append('description', this.incidentForm.get('description')?.value);
      formData.append('location', this.incidentForm.get('location')?.value);
      formData.append('date', this.incidentForm.get('date')?.value);
      formData.append('gravite', this.incidentForm.get('gravite')?.value);

      for (let file of this.uploadedFiles) {
        formData.append('files', file);
      }

      // You can now send formData to your backend API
      console.log(formData);

      this.closeModal.emit();
    }
  }

  onCancel() {
    this.incidentForm.reset();
    this.uploadedFiles = [];
    this.filePreviewUrls = {};
    this.fileContents = {};
    this.closeModal.emit();
  }
}
