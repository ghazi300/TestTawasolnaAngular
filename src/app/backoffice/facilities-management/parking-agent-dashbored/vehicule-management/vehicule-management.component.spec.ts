import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeManagementComponent } from './vehicule-management.component';

describe('VehiculeManagementComponent', () => {
  let component: VehiculeManagementComponent;
  let fixture: ComponentFixture<VehiculeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
