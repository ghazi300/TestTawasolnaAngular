import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPlannerCalendarComponent } from './event-planner-calendar.component';

describe('EventPlannerCalendarComponent', () => {
  let component: EventPlannerCalendarComponent;
  let fixture: ComponentFixture<EventPlannerCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPlannerCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPlannerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
