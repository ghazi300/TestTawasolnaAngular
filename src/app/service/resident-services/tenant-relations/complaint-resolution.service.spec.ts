import { TestBed } from '@angular/core/testing';

import { ComplaintResolutionService } from './complaint-resolution.service';

describe('ComplaintResolutionService', () => {
  let service: ComplaintResolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintResolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
