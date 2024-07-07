import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { TawasalnaModule } from './tawasalna-module'

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { AuthComponent } from './views/auth/auth/auth.component';
import { VisitComponent } from './views/crm/visit/visit.component';
import { LeadComponent } from './views/crm/lead/lead.component';
import { OrdersComponent } from './views/crm/orders/orders.component';
import { DeliveryComponent } from './views/crm/delivery/delivery.component';
import { ContractsComponent } from './views/crm/contracts/contracts.component';
import { IndexComponent } from './views/crm/index/index.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { ForgetPasswordComponent } from './views/auth/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AuthComponent,
    VisitComponent,
    LeadComponent,
    OrdersComponent,
    DeliveryComponent,
    ContractsComponent,
    IndexComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    TawasalnaModule,
    DashboardModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
