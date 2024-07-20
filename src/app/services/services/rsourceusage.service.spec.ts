import { TestBed } from '@angular/core/testing';

import { RsourceusageService } from './rsourceusage.service';

describe('RsourceusageService', () => {
  let service: RsourceusageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsourceusageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
