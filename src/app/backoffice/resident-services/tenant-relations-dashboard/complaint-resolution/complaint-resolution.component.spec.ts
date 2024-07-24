import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintResolutionComponent } from './complaint-resolution.component';

describe('ComplaintResolutionComponent', () => {
  let component: ComplaintResolutionComponent;
  let fixture: ComponentFixture<ComplaintResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintResolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
