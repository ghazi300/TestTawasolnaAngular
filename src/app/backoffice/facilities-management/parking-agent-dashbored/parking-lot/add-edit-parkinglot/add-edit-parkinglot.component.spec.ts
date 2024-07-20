import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParkinglotComponent } from './add-edit-parkinglot.component';

describe('AddEditParkinglotComponent', () => {
  let component: AddEditParkinglotComponent;
  let fixture: ComponentFixture<AddEditParkinglotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParkinglotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditParkinglotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
