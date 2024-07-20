import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {EquipementService} from "../../../../services/services/equipement.service";

@Component({
  selector: 'app-add-equipment-form',
  templateUrl: './add-equipment-form.component.html',
  styleUrls: ['./add-equipment-form.component.scss']
})
export class AddEquipmentFormComponent implements OnInit{
  equipmentForm: FormGroup;

  constructor( private fb: FormBuilder,
               private dialogRef: MatDialogRef<AddEquipmentFormComponent>,
               private equipmentService: EquipementService) {
    this.equipmentForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  saveEquipment(): void {
    if (this.equipmentForm.valid) {
      this.equipmentService.addEquipment(this.equipmentForm.value).subscribe(() => {
        this.dialogRef.close(this.equipmentForm.value);
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
