import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentServicesRoutingModule } from './resident-services-routing.module';
import { IndexResidentServicesComponent } from './index-resident-services/index-resident-services.component';
import { ResidentServicesLayoutComponent } from './resident-services-layout/resident-services-layout.component';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { FeatherModule } from 'angular-feather';


@NgModule({
  declarations: [
    IndexResidentServicesComponent,
    ResidentServicesLayoutComponent
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    FeatherModule,
    ResidentServicesRoutingModule
  ]
})
export class ResidentServicesModule { }
