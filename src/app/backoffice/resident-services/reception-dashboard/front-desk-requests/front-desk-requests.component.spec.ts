import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskRequestsComponent } from './front-desk-requests.component';

describe('FrontDeskRequestsComponent', () => {
  let component: FrontDeskRequestsComponent;
  let fixture: ComponentFixture<FrontDeskRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontDeskRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDeskRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
