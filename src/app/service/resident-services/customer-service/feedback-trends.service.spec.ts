import { TestBed } from '@angular/core/testing';

import { FeedbackTrendsService } from './feedback-trends.service';

describe('FeedbackTrendsService', () => {
  let service: FeedbackTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
