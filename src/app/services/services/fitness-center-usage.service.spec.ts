import { TestBed } from '@angular/core/testing';

import { FitnessCenterUsageService } from './fitness-center-usage.service';

describe('FitnessCenterUsageService', () => {
  let service: FitnessCenterUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitnessCenterUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
