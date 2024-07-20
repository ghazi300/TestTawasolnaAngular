import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TawasalnaModule } from './tawasalna-module';
import { AuthComponent } from './views/auth/auth/auth.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { ForgetPasswordComponent } from './views/auth/forget-password/forget-password.component';
import { BackofficeModule } from "./backoffice/backoffice.module";
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatSelectModule } from '@angular/material/select';
import { AddEventDialogComponent } from './backoffice/add-event-dialog/add-event-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatSelectModule,
    TawasalnaModule,
    BackofficeModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  entryComponents: [AddEventDialogComponent] // Ajoutez ceci pour les composants de dialogue

})
export class AppModule { }
