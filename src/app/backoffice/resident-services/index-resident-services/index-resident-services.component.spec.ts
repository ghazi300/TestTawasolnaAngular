import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexResidentServicesComponent } from './index-resident-services.component';

describe('IndexResidentServicesComponent', () => {
  let component: IndexResidentServicesComponent;
  let fixture: ComponentFixture<IndexResidentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexResidentServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexResidentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
