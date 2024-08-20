import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUrgenceInventoryComponent } from './plan-urgence-inventory.component';

describe('PlanUrgenceInventoryComponent', () => {
  let component: PlanUrgenceInventoryComponent;
  let fixture: ComponentFixture<PlanUrgenceInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanUrgenceInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanUrgenceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
