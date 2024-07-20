import { TestBed } from '@angular/core/testing';

import { CulturalProgramService } from './cultural-program.service';

describe('CulturalProgramService', () => {
  let service: CulturalProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CulturalProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
