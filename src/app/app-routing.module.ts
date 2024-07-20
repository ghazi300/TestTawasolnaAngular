import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './views/auth/auth/auth.component';

import {RegisterComponent} from "./views/auth/register/register.component";
import {ForgetPasswordComponent} from "./views/auth/forget-password/forget-password.component";

const routes: Routes = [
  {
    path : "auth", component: AuthComponent
  },
  {
    path : "signup", component: RegisterComponent
  },
  {
    path : "forgetpassowrd", component: ForgetPasswordComponent
  },

  {path:'front',loadChildren:() => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)},
  {path:'admin',loadChildren:() => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)},

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
