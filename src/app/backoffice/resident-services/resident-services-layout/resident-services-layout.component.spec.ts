import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentServicesLayoutComponent } from './resident-services-layout.component';

describe('ResidentServicesLayoutComponent', () => {
  let component: ResidentServicesLayoutComponent;
  let fixture: ComponentFixture<ResidentServicesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentServicesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentServicesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
