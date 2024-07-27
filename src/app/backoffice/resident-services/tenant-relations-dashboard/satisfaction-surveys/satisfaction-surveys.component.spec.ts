import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionSurveysComponent } from './satisfaction-surveys.component';

describe('SatisfactionSurveysComponent', () => {
  let component: SatisfactionSurveysComponent;
  let fixture: ComponentFixture<SatisfactionSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfactionSurveysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisfactionSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
