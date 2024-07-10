import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TawasalnaModule } from './tawasalna-module'


import { AuthComponent } from './views/auth/auth/auth.component';

import { RegisterComponent } from './views/auth/register/register.component';
import { ForgetPasswordComponent } from './views/auth/forget-password/forget-password.component';
import {BackofficeModule} from "./backoffice/backoffice.module";

@NgModule({
  declarations: [
    AppComponent,

    AuthComponent,


    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    TawasalnaModule,
    BackofficeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }