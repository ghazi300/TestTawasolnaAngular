import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { SimulationService } from 'src/app/service/simulation.service';

@Component({
  selector: 'app-simulation-calendar',
  templateUrl: './simulation-calendar.component.html',
  styleUrls: ['./simulation-calendar.component.scss']
})
export class SimulationCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  constructor(private simulationService: SimulationService) {}

  ngOnInit(): void {
    this.simulationService.getSimulations().subscribe((simulations) => {
      this.events = simulations.map((simulation) => ({
        start: new Date(simulation.dateDebut),
        end: new Date(simulation.dateFin),
        title: simulation.titre,
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
        meta: {
          description: simulation.description 
        }
      }));
    });
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
    alert(`Event clicked: ${event.title} from ${event.start} to ${event.end}`);
  }
}
