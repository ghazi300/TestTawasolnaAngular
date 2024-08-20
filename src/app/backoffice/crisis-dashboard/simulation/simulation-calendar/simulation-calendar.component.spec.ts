import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCalendarComponent } from './simulation-calendar.component';

describe('SimulationCalendarComponent', () => {
  let component: SimulationCalendarComponent;
  let fixture: ComponentFixture<SimulationCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
