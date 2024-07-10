import {Component, OnInit} from '@angular/core';
interface Widget {
  title: string;
  value: number;
}
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit{
  widgets: Widget[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch key metrics from an API or service
    this.widgets = [
      { title: 'Total Incidents', value: 150 },
      { title: 'Active Incidents', value: 5 },
      { title: 'Resources Available', value: 20 }
    ];
  }

}
