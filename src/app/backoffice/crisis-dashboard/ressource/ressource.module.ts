import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourceRoutingModule } from './ressource-routing.module';
import { ResourceInventoryComponent } from './resource-inventory/resource-inventory.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';


@NgModule({
  declarations: [
    ResourceInventoryComponent,
    ResourceListComponent,
    AddResourceFormComponent,
    ResourceAllocationComponent
  ],
  imports: [
    CommonModule,
    RessourceRoutingModule,
    ReactiveFormsModule,
    TawasalnaModule
  ]
})
export class RessourceModule { }
