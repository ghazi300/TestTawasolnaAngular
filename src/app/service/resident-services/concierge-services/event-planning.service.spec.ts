import { TestBed } from '@angular/core/testing';

import { EventPlanningService } from './event-planning.service';

describe('EventPlanningService', () => {
  let service: EventPlanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPlanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
