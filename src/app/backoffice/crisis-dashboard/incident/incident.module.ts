import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentComponent } from './incident/incident.component';
import {TawasalnaModule} from "../../../tawasalna-module";
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { WidgetComponent } from './widget/widget.component';
import { IncidentRecentComponent } from './incident-recent/incident-recent.component';



@NgModule({
  declarations: [
    IncidentComponent,
    IncidentDetailsComponent,
    WidgetComponent,
    IncidentRecentComponent,

  ],
    imports: [
        CommonModule,
        IncidentRoutingModule,
        TawasalnaModule
    ]
})
export class IncidentModule { }