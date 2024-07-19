import { Component } from '@angular/core';
import {
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexFill,
  ApexXAxis,
  ApexGrid
} from 'ng-apexcharts';

export interface FitnessUsageStatsChartOptions {
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  chart: ApexChart;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions; // Ensure plotOptions is properly defined
  fill: ApexFill;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-incident-statistics',
  templateUrl: './incident-statistics.component.html',
  styleUrls: ['./incident-statistics.component.scss']
})
export class IncidentStatisticsComponent {
  public chartOptions: any;

  constructor() {

      this.chartOptions = {
        series: [
          {
            name: 'Fitness Center Usage',
            data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
            color: "#62AEC6",
          }
        ],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        chart: {
          type: 'bar',
          height: 300,
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 5,
          colors: ['none']
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            borderRadius: 6,
          },
        },
      };
    }


}
