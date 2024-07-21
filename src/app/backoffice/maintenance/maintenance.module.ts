import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { TaskComponent, TaskDialog, TaskEditDialog } from './tasks/tasks.component';
import { TechnicienComponent, TechnicienDialog, TechnicienEditDialog } from './technicien/technicien.component';
import { AssignedTaskComponent, AssignedTaskDialog } from './assigned-task/assigned-task.component';
import { ConfirmDialogComponent } from './variables/popup/popup.component';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TawasalnaModule } from 'src/app/tawasalna-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MaintenanceComponent,
    TaskComponent,
    TaskDialog,
    TaskEditDialog,
    TechnicienComponent,
    TechnicienDialog,
    TechnicienEditDialog,
    TechnicienComponent,
    AssignedTaskComponent,
    AssignedTaskDialog,
    ConfirmDialogComponent
   
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    FormsModule,
    TawasalnaModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule ,// Ensure this is imported
MatDialogModule,
RouterModule
  ]
})
export class MaintenanceModule { }
