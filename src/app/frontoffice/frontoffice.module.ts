import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { MainComponent } from './pages/main/main.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrontofficeComponent,
    NavbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    MainComponent,
    IncidentFormComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    ReactiveFormsModule
  ]
})
export class FrontofficeModule { }
