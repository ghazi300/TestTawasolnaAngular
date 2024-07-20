import { TestBed } from '@angular/core/testing';

import { DiversityinitiativeService } from './diversityinitiative.service';

describe('DiversityinitiativeService', () => {
  let service: DiversityinitiativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiversityinitiativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
