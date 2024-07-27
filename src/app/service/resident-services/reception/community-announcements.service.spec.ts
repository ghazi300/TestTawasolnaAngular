import { TestBed } from '@angular/core/testing';

import { CommunityAnnouncementsService } from './community-announcements.service';

describe('CommunityAnnouncementsService', () => {
  let service: CommunityAnnouncementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityAnnouncementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
