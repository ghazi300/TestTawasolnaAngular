import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestEscalationComponent } from './service-request-escalation.component';

describe('ServiceRequestEscalationComponent', () => {
  let component: ServiceRequestEscalationComponent;
  let fixture: ComponentFixture<ServiceRequestEscalationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestEscalationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestEscalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
