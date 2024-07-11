import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentRecentComponent } from './incident-recent.component';

describe('IncidentRecentComponent', () => {
  let component: IncidentRecentComponent;
  let fixture: ComponentFixture<IncidentRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
