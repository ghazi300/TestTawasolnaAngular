import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParkingSpaceComponent } from './add-edit-parking-space.component';

describe('AddEditParkingSpaceComponent', () => {
  let component: AddEditParkingSpaceComponent;
  let fixture: ComponentFixture<AddEditParkingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParkingSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditParkingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
