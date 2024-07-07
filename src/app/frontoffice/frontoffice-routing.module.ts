import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontofficeComponent} from "./frontoffice.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {path:'',component:FrontofficeComponent,children:[
      {path:'main',component:MainComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
