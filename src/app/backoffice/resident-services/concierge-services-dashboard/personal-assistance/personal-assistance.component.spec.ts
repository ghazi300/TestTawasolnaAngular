import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAssistanceComponent } from './personal-assistance.component';

describe('PersonalAssistanceComponent', () => {
  let component: PersonalAssistanceComponent;
  let fixture: ComponentFixture<PersonalAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
