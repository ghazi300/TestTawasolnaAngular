import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    FrontofficeComponent,
    NavbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }
