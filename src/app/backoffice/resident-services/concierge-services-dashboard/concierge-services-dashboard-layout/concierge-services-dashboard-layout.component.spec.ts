import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciergeServicesDashboardLayoutComponent } from './concierge-services-dashboard-layout.component';

describe('ConciergeServicesDashboardLayoutComponent', () => {
  let component: ConciergeServicesDashboardLayoutComponent;
  let fixture: ComponentFixture<ConciergeServicesDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciergeServicesDashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciergeServicesDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
