import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceInventoryComponent } from './resource-inventory.component';

describe('ResourceInventoryComponent', () => {
  let component: ResourceInventoryComponent;
  let fixture: ComponentFixture<ResourceInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
