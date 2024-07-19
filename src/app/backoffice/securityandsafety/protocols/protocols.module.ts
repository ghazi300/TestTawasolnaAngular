import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolsRoutingModule } from './protocols-routing.module';
import { TawasalnaModule } from '../../../tawasalna-module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProtocolsComponent } from './protocols/protocols.component';
import { ProtocolsFormComponent } from './protocols_form/protocols_form.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateProtocolDialogComponent} from "./protocols/update-protocol-dialog.component";
import {ConfirmDialogComponent} from "./protocols/confirm-dialog.component";
import {PatrolRouteListComponent} from "../patrol/patrol-route-list/patrol-route-list";

@NgModule({
    declarations: [
        ProtocolsComponent,
        ProtocolsFormComponent,
        UpdateProtocolDialogComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        CommonModule,
        ProtocolsRoutingModule,
        TawasalnaModule,
        NgApexchartsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ProtocolsModule { }
