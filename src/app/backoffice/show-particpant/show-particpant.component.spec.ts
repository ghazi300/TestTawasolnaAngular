import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParticpantComponent } from './show-particpant.component';

describe('ShowParticpantComponent', () => {
  let component: ShowParticpantComponent;
  let fixture: ComponentFixture<ShowParticpantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParticpantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowParticpantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
