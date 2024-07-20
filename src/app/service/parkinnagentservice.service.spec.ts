import { TestBed } from '@angular/core/testing';

import { ParkinnagentserviceService } from './parkinnagentservice.service';

describe('ParkinnagentserviceService', () => {
  let service: ParkinnagentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkinnagentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
