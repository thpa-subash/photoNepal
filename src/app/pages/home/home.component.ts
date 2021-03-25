import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { getISOWeek } from 'date-fns';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 40, 77, 75], label: 'No of Users' },
    { data: [30, 93, 43, 34, 5, 53], label: 'Subash' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: '',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  data = [
    { email: 'subashthapa901@gmail.com', name: 'Subash Thapa' },
    { email: 'thapa@gmail.com', name: 'Thapa Subash' },
    { email: 'apa@gmail.com', name: 'Apa Thapa' },
    { email: 'bas@gmail.com', name: 'Bas Thapa' },
  ];
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
