import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'event',loadChildren:() => import('./event/event.module').then(m => m.EventModule)},
  {path:'fitness',loadChildren:() => import('./fitness-dashboard/fitness-dashboard.module').then(m => m.FitnessDashboardModule)},
  {path:'education',loadChildren:() => import('./fitness-dashboard/fitness-dashboard.module').then(m => m.FitnessDashboardModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityEngagementRoutingModule { }