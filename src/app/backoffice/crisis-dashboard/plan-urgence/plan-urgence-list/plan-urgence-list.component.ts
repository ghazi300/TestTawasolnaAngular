import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-urgence-list',
  templateUrl: './plan-urgence-list.component.html',
  styleUrls: ['./plan-urgence-list.component.scss']
})
export class PlanUrgenceListComponent {
  @Input() plans: any[] = [];

  displayedColumns: string[] = ['titre', 'ressourcesNecessaires', 'lastUpdated'];
}
