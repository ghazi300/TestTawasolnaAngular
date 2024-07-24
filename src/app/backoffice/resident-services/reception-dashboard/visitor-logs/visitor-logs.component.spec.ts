import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLogsComponent } from './visitor-logs.component';

describe('VisitorLogsComponent', () => {
  let component: VisitorLogsComponent;
  let fixture: ComponentFixture<VisitorLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
