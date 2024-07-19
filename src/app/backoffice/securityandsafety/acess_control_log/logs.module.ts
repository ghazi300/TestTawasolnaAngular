import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { TawasalnaModule } from '../../../tawasalna-module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LogsRoutingModule } from './logs-routing.module';
import {AccessControlLogListComponent} from "./access_control_log_list_view/access_control_log_list_view.component";
import {Access_control_log_formComponent} from "./access_control_log_form/access_control_log_form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateLogDialogComponent} from "./access_control_log_list_view/update-log-dialog.component";
import {ConfirmDialogComponent} from "./access_control_log_list_view/confirm-dialog.component";

@NgModule({
    declarations: [
AccessControlLogListComponent,
        Access_control_log_formComponent,
        UpdateLogDialogComponent,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        TawasalnaModule,
        NgApexchartsModule,
        RouterModule,
        LogsRoutingModule,
        NgApexchartsModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class LogsModule { }
