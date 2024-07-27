import { TestBed } from '@angular/core/testing';

import { SatisfactionSurveysService } from './satisfaction-surveys.service';

describe('SatisfactionSurveysService', () => {
  let service: SatisfactionSurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisfactionSurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
