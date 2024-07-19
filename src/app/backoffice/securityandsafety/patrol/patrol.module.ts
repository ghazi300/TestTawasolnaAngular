import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TawasalnaModule } from "../../../tawasalna-module";
import { NgApexchartsModule } from "ng-apexcharts";
import {PatrolRouteFormComponent} from "./patrol-route-form/patrol-route-form";
import {UpdatePatrolRouteDialogComponent} from "./patrol-route-list/update-patrol-route-dialog.component";
import {ConfirmDialogComponent} from "./patrol-route-list/confirm-dialog.component";
import {PatrolRouteListComponent} from "./patrol-route-list/patrol-route-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [
        PatrolRouteFormComponent,
        UpdatePatrolRouteDialogComponent,
        ConfirmDialogComponent,
        PatrolRouteListComponent

  ],
    imports: [
        CommonModule,
        TawasalnaModule,
        NgApexchartsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,

    ]
})
export class PatrolModule { }
