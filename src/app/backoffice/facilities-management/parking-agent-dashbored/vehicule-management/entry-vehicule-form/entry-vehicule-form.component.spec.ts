import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryVehiculeFormComponent } from './entry-vehicule-form.component';

describe('EntryVehiculeFormComponent', () => {
  let component: EntryVehiculeFormComponent;
  let fixture: ComponentFixture<EntryVehiculeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryVehiculeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryVehiculeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
