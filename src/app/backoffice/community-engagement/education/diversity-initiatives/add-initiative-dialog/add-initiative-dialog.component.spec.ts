import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInitiativeDialogComponent } from './add-initiative-dialog.component';

describe('AddInitiativeDialogComponent', () => {
  let component: AddInitiativeDialogComponent;
  let fixture: ComponentFixture<AddInitiativeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInitiativeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInitiativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
