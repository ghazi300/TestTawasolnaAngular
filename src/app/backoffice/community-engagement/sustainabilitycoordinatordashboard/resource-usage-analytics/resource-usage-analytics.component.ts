import { Component } from '@angular/core';
import {RsourceusageService} from "../../../../services/services/rsourceusage.service";

@Component({
  selector: 'app-resource-usage-analytics',
  templateUrl: './resource-usage-analytics.component.html',
  styleUrls: ['./resource-usage-analytics.component.scss']
})
export class ResourceUsageAnalyticsComponent {
  resourceUsageData: any[] = [];
  view: [number, number] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Resource';
  showYAxisLabel = true;
  yAxisLabel = 'Usage';

  colorScheme: string | any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
constructor(private resourceUsage:RsourceusageService) {
}
  ngOnInit(): void {
    this.loadResourceUsageData();
  }

  loadResourceUsageData() {
    this.resourceUsage.getAllResourceUsage().subscribe((data:any)=>{
      this.resourceUsageData=data.map((item:any) => ({
        name: item.resourceName,
        value: item.usageAmount
      }))

    },error => {
      console.log(error);
    })
  }

}
