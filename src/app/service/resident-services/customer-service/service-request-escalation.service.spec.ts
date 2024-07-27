import { TestBed } from '@angular/core/testing';

import { ServiceRequestEscalationService } from './service-request-escalation.service';

describe('ServiceRequestEscalationService', () => {
  let service: ServiceRequestEscalationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRequestEscalationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
