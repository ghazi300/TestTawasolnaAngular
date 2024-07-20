import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentFormComponent } from './add-equipment-form.component';

describe('AddEquipmentFormComponent', () => {
  let component: AddEquipmentFormComponent;
  let fixture: ComponentFixture<AddEquipmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
