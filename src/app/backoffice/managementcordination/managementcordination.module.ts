import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementcordinationRoutingModule } from './managementcordination-routing.module';
import { ManagementcordinationComponent } from './managementcordination/managementcordination.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagementcordinationComponent
  ],
  imports: [
    CommonModule,
    ManagementcordinationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ManagementcordinationModule { }
