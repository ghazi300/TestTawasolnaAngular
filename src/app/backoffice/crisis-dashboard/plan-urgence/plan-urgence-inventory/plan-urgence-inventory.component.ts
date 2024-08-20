import { Component, OnInit } from '@angular/core';
import { PlanUrgenceService } from 'src/app/service/plan-urgence.service';

@Component({
  selector: 'app-plan-urgence-inventory',
  templateUrl: './plan-urgence-inventory.component.html',
  styleUrls: ['./plan-urgence-inventory.component.scss']
})
export class PlanUrgenceInventoryComponent implements OnInit {
  plans: any[] = [];
  isAddPlanFormVisible = false;

  constructor(private planService: PlanUrgenceService) {}

  ngOnInit() {
    this.loadPlans();
  }

  loadPlans() {
    this.planService.getPlans().subscribe(
      (data) => {
        this.plans = data;
      },
      (error) => {
        console.error('Error loading plans:', error);
      }
    );
  }

  showAddPlanForm() {
    this.isAddPlanFormVisible = true;
  }

  hideAddPlanForm() {
    this.isAddPlanFormVisible = false;
  }

  onPlanAdded(plan: any) {
    this.plans.push(plan); // Ajouter le nouveau plan à la liste
    this.hideAddPlanForm();
  }
}
