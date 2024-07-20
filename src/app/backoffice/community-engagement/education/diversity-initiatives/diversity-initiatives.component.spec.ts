import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversityInitiativesComponent } from './diversity-initiatives.component';

describe('DiversityInitiativesComponent', () => {
  let component: DiversityInitiativesComponent;
  let fixture: ComponentFixture<DiversityInitiativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversityInitiativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiversityInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
