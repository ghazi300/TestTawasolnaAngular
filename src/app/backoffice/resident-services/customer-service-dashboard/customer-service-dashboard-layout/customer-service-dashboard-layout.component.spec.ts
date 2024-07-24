import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceDashboardLayoutComponent } from './customer-service-dashboard-layout.component';

describe('CustomerServiceDashboardLayoutComponent', () => {
  let component: CustomerServiceDashboardLayoutComponent;
  let fixture: ComponentFixture<CustomerServiceDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceDashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
