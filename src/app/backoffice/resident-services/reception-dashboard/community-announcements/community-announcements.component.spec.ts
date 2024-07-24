import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityAnnouncementsComponent } from './community-announcements.component';

describe('CommunityAnnouncementsComponent', () => {
  let component: CommunityAnnouncementsComponent;
  let fixture: ComponentFixture<CommunityAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
