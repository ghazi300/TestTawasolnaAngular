import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantRelationsDashboardLayoutComponent } from './tenant-relations-dashboard-layout.component';

describe('TenantRelationsDashboardLayoutComponent', () => {
  let component: TenantRelationsDashboardLayoutComponent;
  let fixture: ComponentFixture<TenantRelationsDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantRelationsDashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantRelationsDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
