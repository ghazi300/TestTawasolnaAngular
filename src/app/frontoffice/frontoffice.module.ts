import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { MainComponent } from './pages/main/main.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { ManagementcordinationComponent } from './pages/managementcordination/managementcordination.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TawasalnaModule } from '../tawasalna-module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FrontofficeComponent,
    NavbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    MainComponent,
    IncidentFormComponent,
    ManagementcordinationComponent

  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    TawasalnaModule,
    MatDialogModule
  ]
})
export class FrontofficeModule { }
