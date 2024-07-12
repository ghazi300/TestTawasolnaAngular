import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontofficeComponent} from "./frontoffice.component";
import {MainComponent} from "./pages/main/main.component";
import {ManagementcordinationComponent} from "./pages/managementcordination/managementcordination.component";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'',component:FrontofficeComponent,children:[
      {path:'main',component:MainComponent},
      {path:'form',component:ManagementcordinationComponent},

    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
