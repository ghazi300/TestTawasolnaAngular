import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionDashboardLayoutComponent } from './reception-dashboard-layout.component';

describe('ReceptionDashboardLayoutComponent', () => {
  let component: ReceptionDashboardLayoutComponent;
  let fixture: ComponentFixture<ReceptionDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionDashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
