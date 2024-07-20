import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUsageAnalyticsComponent } from './resource-usage-analytics.component';

describe('ResourceUsageAnalyticsComponent', () => {
  let component: ResourceUsageAnalyticsComponent;
  let fixture: ComponentFixture<ResourceUsageAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceUsageAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceUsageAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
