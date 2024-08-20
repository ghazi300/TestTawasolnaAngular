import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUrgenceComponent } from './plan-urgence.component';

describe('PlanUrgenceComponent', () => {
  let component: PlanUrgenceComponent;
  let fixture: ComponentFixture<PlanUrgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanUrgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
