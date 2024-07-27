import { TestBed } from '@angular/core/testing';

import { FrontDeskRequestsService } from './front-desk-requests.service';

describe('FrontDeskRequestsService', () => {
  let service: FrontDeskRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontDeskRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
