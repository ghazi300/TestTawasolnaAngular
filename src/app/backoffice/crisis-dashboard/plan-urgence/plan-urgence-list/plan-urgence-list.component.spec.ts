import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUrgenceListComponent } from './plan-urgence-list.component';

describe('PlanUrgenceListComponent', () => {
  let component: PlanUrgenceListComponent;
  let fixture: ComponentFixture<PlanUrgenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanUrgenceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanUrgenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
