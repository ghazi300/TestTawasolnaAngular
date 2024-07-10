import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessUsageStatisticsComponent } from './fitness-usage-statistics.component';

describe('FitnessUsageStatisticsComponent', () => {
  let component: FitnessUsageStatisticsComponent;
  let fixture: ComponentFixture<FitnessUsageStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessUsageStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessUsageStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
