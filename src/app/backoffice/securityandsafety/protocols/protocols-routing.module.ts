import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtocolsComponent } from './protocols/protocols.component';
import {ProtocolsFormComponent} from "./protocols_form/protocols_form.component";

const routes: Routes = [
  { path: 'protocols', component: ProtocolsComponent },
  { path: 'protocolsform', component: ProtocolsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtocolsRoutingModule { }
