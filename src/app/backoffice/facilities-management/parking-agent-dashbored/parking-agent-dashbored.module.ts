import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingAgentDashboredRoutingModule } from './parking-agent-dashbored-routing.module';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';

import { VehiculeManagementComponent } from './vehicule-management/vehicule-management.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingFormComponent } from './parking-list/parking-form/parking-form.component';
import { EntryVehiculeFormComponent } from './vehicule-management/entry-vehicule-form/entry-vehicule-form.component';

import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { AddEditParkinglotComponent } from './parking-lot/add-edit-parkinglot/add-edit-parkinglot.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';
import { AddEditParkingSpaceComponent } from './parking-space/add-edit-parking-space/add-edit-parking-space.component';


@NgModule({
  declarations: [
    DashboardMenuComponent,
    VehiculeManagementComponent,
    ParkingListComponent,
    ParkingFormComponent,
    EntryVehiculeFormComponent,
    ParkingLotComponent,
    AddEditParkinglotComponent,
    ParkingSpaceComponent,
    AddEditParkingSpaceComponent,
  ],
  imports: [
    CommonModule,
    ParkingAgentDashboredRoutingModule,
    NgApexchartsModule,
    MatCardModule,
    FlexLayoutModule,
    TawasalnaModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,MatDialogModule  
      

  ]
})
export class ParkingAgentDashboredModule { }
