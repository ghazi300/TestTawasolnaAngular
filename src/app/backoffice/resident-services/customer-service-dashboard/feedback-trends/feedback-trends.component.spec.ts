import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTrendsComponent } from './feedback-trends.component';

describe('FeedbackTrendsComponent', () => {
  let component: FeedbackTrendsComponent;
  let fixture: ComponentFixture<FeedbackTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackTrendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
