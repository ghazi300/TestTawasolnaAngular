import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanUrgenceRoutingModule } from './plan-urgence-routing.module';
import { PlanUrgenceListComponent } from './plan-urgence-list/plan-urgence-list.component';
import { PlanUrgenceFormComponent } from './plan-urgence-form/plan-urgence-form.component';
import { PlanUrgenceInventoryComponent } from './plan-urgence-inventory/plan-urgence-inventory.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlanUrgenceListComponent,
    PlanUrgenceFormComponent,
    PlanUrgenceInventoryComponent
  ],
  imports: [
    CommonModule,
    PlanUrgenceRoutingModule,
    TawasalnaModule,
    ReactiveFormsModule
  ]
})
export class PlanUrgenceModule { }
