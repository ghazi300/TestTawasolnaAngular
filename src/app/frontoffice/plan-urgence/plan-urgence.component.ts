import { trigger, transition, animate ,style} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PlanUrgenceService } from 'src/app/service/plan-urgence.service';

@Component({
  selector: 'app-plan-urgence',
  templateUrl: './plan-urgence.component.html',
  styleUrls: ['./plan-urgence.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('300ms', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class PlanUrgenceComponent implements OnInit {
  plansUrgence: any[] = [];

  constructor(private planUrgenceService: PlanUrgenceService) {}

  ngOnInit() {
    this.loadPlansUrgence();
  }

  loadPlansUrgence() {
    this.planUrgenceService.getPlans().subscribe(
      (data) => {
        this.plansUrgence = data;
      },
      (error) => {
        console.error('Error loading plans urgence:', error);
      }
    );
  }
}
