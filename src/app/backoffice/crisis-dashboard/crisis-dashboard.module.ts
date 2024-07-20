import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisDashboardRoutingModule } from './crisis-dashboard-routing.module';
import { CrisisMenuComponent } from './crisis-menu.component';
import {TawasalnaModule} from "../../tawasalna-module";


@NgModule({
  declarations: [
    CrisisMenuComponent
  ],
    imports: [
        CommonModule,
        CrisisDashboardRoutingModule,
        TawasalnaModule
    ]
})
export class CrisisDashboardModule { }
