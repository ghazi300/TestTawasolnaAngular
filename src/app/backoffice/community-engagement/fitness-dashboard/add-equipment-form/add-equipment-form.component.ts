import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-equipment-form',
  templateUrl: './add-equipment-form.component.html',
  styleUrls: ['./add-equipment-form.component.scss']
})
export class AddEquipmentFormComponent implements OnInit{
  equipment: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  saveEquipment() {
    console.log('Equipment to save:', this.equipment);

  }

}