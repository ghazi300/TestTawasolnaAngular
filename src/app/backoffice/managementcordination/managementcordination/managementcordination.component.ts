import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-managementcordination',
  templateUrl: './managementcordination.component.html',
  styleUrls: ['./managementcordination.component.scss']
})
export class ManagementcordinationComponent implements OnInit {

  opinionForm: FormGroup;
  percentages: { [key: string]: number } = {}; // Store survey percentages
  chartOptions: any; // Chart configuration object
  chartLabels: string[] = [];
  title: ApexTitleSubtitle; // Define title property

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.opinionForm = this.fb.group({
      residentName: ['', Validators.required],
      cleanliness: ['', Validators.required],
      security: ['', Validators.required],
      amenities: ['', Validators.required],
      maintenance: ['', Validators.required],
      management: ['', Validators.required]
    });

    // Initialize title property
    this.title = {
      text: 'Survey Results (Percentages)',
      align: 'center'
    };
  }

  ngOnInit(): void {
    this.http.get<{ [key: string]: number }>('http://localhost:9003/tawasalna-relations/api/surveys/percentages')
      .subscribe(
        response => {
          this.percentages = response;
          this.prepareChartData(); // Prepare data for chart
        },
        error => {
          console.error('Error fetching percentages:', error);
          // Handle errors (consider displaying user-friendly messages)
        }
      );
  }

  submitOpinions() {
    if (this.opinionForm.valid) {
      const formData = this.opinionForm.value;
      // Implement form submission logic here
    } else {
      // Handle form errors or validation messages here
    }
  }

  prepareChartData() {
    this.chartLabels = Object.keys(this.percentages);
    const chartData = Object.values(this.percentages);

    this.chartOptions = {
      series: [{
        name: 'Percentage',
        data: chartData
      }],
      chart: {
        height: 350,
        type: 'bar'
      },
      title: {
        text: 'Survey Percentages'
      },
      xaxis: {
        categories: this.chartLabels
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#007bff', '#ffc107', '#dc3545', '#28a745', '#6c757d']
    };
  }
}
