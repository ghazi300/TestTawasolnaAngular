import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingAgentDashboredRoutingModule } from './parking-agent-dashbored-routing.module';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VehiculeManagementComponent } from './vehicule-management/vehicule-management.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingFormComponent } from './parking-list/parking-form/parking-form.component';
import { EntryVehiculeFormComponent } from './vehicule-management/entry-vehicule-form/entry-vehicule-form.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DashboardMenuComponent,
    VehiculeManagementComponent,
    ParkingListComponent,
    ParkingFormComponent,
    EntryVehiculeFormComponent,
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
