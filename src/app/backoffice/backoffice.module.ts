import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './dashboard.component';
import {FeatherModule} from "angular-feather";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FeatherModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    NgApexchartsModule,
   

  ]
})
export class BackofficeModule { }