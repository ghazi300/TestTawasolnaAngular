import { TestBed } from '@angular/core/testing';

import { InquiryLogsService } from './inquiry-logs.service';

describe('InquiryLogsService', () => {
  let service: InquiryLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
