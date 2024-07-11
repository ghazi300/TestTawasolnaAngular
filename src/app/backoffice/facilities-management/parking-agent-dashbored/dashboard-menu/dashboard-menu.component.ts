import { Component ,OnInit, ViewChild} from '@angular/core';
import {
  ApexChart,
  ApexLegend,
  ApexTooltip,
  ChartComponent,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';

interface cards {
    // icon: string;
    number: number;
    text: string;
  }
  
  export interface ActiveUserCardChartOptions {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
    tooltip: ApexTooltip;
  }
  interface TrafficAnalysisData {
    category: string;
    value: number;
  }
@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent {

  @ViewChild("activeusercardchart") chart1: ChartComponent = Object.create(null);
  public activeusercardChartOptions!: Partial<ActiveUserCardChartOptions> | any;
  

 
  
  constructor() {
    // Initial pie chart data
    this.activeusercardChartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'pie',
        events: {
          dataPointSelection: (event: any, chartContext: any, config: any) => {
            const selectedLabel = this.activeusercardChartOptions.labels[config.dataPointIndex];
            this.loadDrilldownData(selectedLabel);
          }
        }
      },
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Grapes'],
      legend: {
        show: true,
      },
      tooltip: {
        theme: "dark"
      }
    };
  }
  drilldownData: { [key: string]: { series: number[], labels: string[] } } = {
    'Total Vehicles Parked': {
      series: [50, 25, 25], // Exemple de données pour le drilldown
      labels: ['Voitures', 'Camions', 'Motos'],
    },
    'Vehicles In': {
      series: [60, 20, 20], // Exemple de données pour le drilldown
      labels: ['Voitures', 'Camions', 'Motos'],
    },
    'Vehicles Out': {
      series: [70, 15, 15], // Exemple de données pour le drilldown
      labels: ['Voitures', 'Camions', 'Motos'],
    },
    'This is the fourth card': {
      series: [40, 30, 30], // Exemple de données pour le drilldown
      labels: ['Catégorie A', 'Catégorie B', 'Catégorie C'],
    },
  };

  // Function to load drilldown data
  loadDrilldownData(label: string) {
    if (this.drilldownData[label]) {
      this.activeusercardChartOptions.series = this.drilldownData[label].series;
      this.activeusercardChartOptions.labels = this.drilldownData[label].labels;
      this.activeusercardChartOptions.chart.type = 'pie';
    }
  }

  ngOnInit(): void {
    // Initialisation des données du graphique principal
    const data: TrafficAnalysisData[] = [
      { category: 'Total Vehicles Parked', value: 50 },
      { category: 'Vehicles In', value: 20 },
      { category: 'Vehicles Out', value: 30 },
      { category: 'parking capacite', value: 40 },
    ];

    this.activeusercardChartOptions.series = data.map(item => item.value);
    this.activeusercardChartOptions.labels = data.map(item => item.category);
  }
  // cards: cards [] = [
  //   {
  //     image: "assets/images/u2.webp",
  //     btn: "btn-danger",
  //   },
  //   {
  //     image: "assets/images/u3.webp",
  //     btn: "btn-warning",
  //   },
  //   {
  //     image: "assets/images/u4.webp",
  //     btn: "btn-info",
  //   },
  //   {
  //     image: "assets/images/u4.webp",
  //     btn: "btn-info",
  //   },
  // ]
  cards: cards[] = [
    {
      // icon: "car",
      number: 10,
      text: "Total Vehicule Parked ",
    },
    {
      // icon: "info",
      number: 20,
      text: "Vehicule In ",
    },
    {
      // icon: "warning",
      number: 30,
      text: "Vehicule Out ",
    },
    {
      // icon: "check_circle",
      number: 40,
      text: "This is the fourth card",
    },
  ];

  tiles = [
    {
      text: 'One',
      cols: 3,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: 'Two',
      cols: 1,
      rows: 2,
      color: 'lightgreen'
    },
    {
      text: 'Three',
      cols: 1,
      rows: 1,
      color: 'lightpink'
    },
    {
      text: 'Four',
      cols: 2,
      rows: 1,
      color: '#DDBDF1'
    }
  ];
  onCardClick(card: cards): void {
    console.log('Card clicked:', card);
    // Ajoutez ici la logique pour ce qui se passe lorsque la carte est cliquée
  }
}
