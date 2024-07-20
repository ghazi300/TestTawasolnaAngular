import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalProgramScheduleComponent } from './cultural-program-schedule.component';

describe('CulturalProgramScheduleComponent', () => {
  let component: CulturalProgramScheduleComponent;
  let fixture: ComponentFixture<CulturalProgramScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalProgramScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalProgramScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
