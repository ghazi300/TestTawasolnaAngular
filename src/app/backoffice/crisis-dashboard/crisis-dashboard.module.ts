import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisDashboardRoutingModule } from './crisis-dashboard-routing.module';
import { CrisisMenuComponent } from './crisis-menu.component';
import {TawasalnaModule} from "../../tawasalna-module";
import { NotificationComponent } from './notification/notification.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrisisMenuComponent,
    NotificationComponent
  ],
    imports: [
        CommonModule,
        CrisisDashboardRoutingModule,
        TawasalnaModule,
        FormsModule
    ]
})
export class CrisisDashboardModule { }
