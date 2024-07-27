import { TestBed } from '@angular/core/testing';

import { PersonalAssistanceService } from './personal-assistance.service';

describe('PersonalAssistanceService', () => {
  let service: PersonalAssistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalAssistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
