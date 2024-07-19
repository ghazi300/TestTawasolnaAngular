import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessControlLogListComponent} from "./access_control_log_list_view/access_control_log_list_view.component";
import {Access_control_log_formComponent} from "./access_control_log_form/access_control_log_form.component";

const routes: Routes = [

  {path:'logslist',component:AccessControlLogListComponent},
  {path:'logsform',component:Access_control_log_formComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
