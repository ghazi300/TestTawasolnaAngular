import {Component, OnInit} from '@angular/core';
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
import {FitnessCenterUsageService} from "../../../../services/services/fitness-center-usage.service";


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
  selector: 'app-fitness-usage-statistics',
  templateUrl: './fitness-usage-statistics.component.html',
  styleUrls: ['./fitness-usage-statistics.component.scss']
})
export class FitnessUsageStatisticsComponent implements OnInit{
  public chartOptions: any;

  constructor(private fitnessCenterUsageService: FitnessCenterUsageService) {


      this.chartOptions = {
        series: [
          {
            name: 'Fitness Center Usage',
            data: [],
            color: "#62AEC6",
          }
        ],
        xaxis: {
          categories: [],
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

  ngOnInit(): void {
    this.loadUsageData();
  }


  private loadUsageData() {
    this.fitnessCenterUsageService.getAllEquipmentUsageStats().subscribe((data: any) => {
      this.updateChartOptions(data);
    },(error: any) => {
      console.log(error)
    });

  }
  updateChartOptions(data: any) {
    const categories = data.map((e: { equipmentName: any; }) => e.equipmentName);
    const seriesData = data.map((e: { totalUsageDuration: number; }) => e.totalUsageDuration / 1000 / 60); // Converting milliseconds to minutes

    this.chartOptions = {
      ...this.chartOptions,
      series: [{
        name: 'Fitness Center Usage',
        data: seriesData
      }],
      xaxis: {
        categories: categories
      }
    };
  }
}
