import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceModule } from './maintenance.module';
import { MaintenanceComponent } from './maintenance.component';
import { TaskComponent } from './tasks/tasks.component';
import { AssignedTaskComponent } from './assigned-task/assigned-task.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { DashboardComponent } from '../dashboard.component';

  const routes: Routes = [
    {
      path: "", component: MaintenanceComponent
    },
    {
      path: "task", component: TaskComponent
    },
    {
      path: "Assigned", component: AssignedTaskComponent
    },
    {
      path: "Technicien", component: TechnicienComponent
    }
  ];
  
  


  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
