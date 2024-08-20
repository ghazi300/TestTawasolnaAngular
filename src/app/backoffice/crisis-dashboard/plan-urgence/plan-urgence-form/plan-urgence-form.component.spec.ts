import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUrgenceFormComponent } from './plan-urgence-form.component';

describe('PlanUrgenceFormComponent', () => {
  let component: PlanUrgenceFormComponent;
  let fixture: ComponentFixture<PlanUrgenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanUrgenceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanUrgenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
