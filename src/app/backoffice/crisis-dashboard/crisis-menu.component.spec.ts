import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisMenuComponent } from './crisis-menu.component';

describe('CrisisMenuComponent', () => {
  let component: CrisisMenuComponent;
  let fixture: ComponentFixture<CrisisMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
