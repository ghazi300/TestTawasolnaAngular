import { TestBed } from '@angular/core/testing';

import { PlanUrgenceService } from './plan-urgence.service';

describe('PlanUrgenceService', () => {
  let service: PlanUrgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanUrgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
