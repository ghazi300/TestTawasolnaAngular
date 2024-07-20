// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ManagementcordinationComponent } from './managementcordination.component';

// describe('ManagementcordinationComponent', () => {
//   let component: ManagementcordinationComponent;
//   let fixture: ComponentFixture<ManagementcordinationComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ManagementcordinationComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ManagementcordinationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcordinationComponent } from './managementcordination.component';

describe('ManagementcordinationComponent', () => {
  let component: ManagementcordinationComponent;
  let fixture: ComponentFixture<ManagementcordinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementcordinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementcordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
