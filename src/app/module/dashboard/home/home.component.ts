import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  //line chart option
  lineChart: typeof Highcharts = Highcharts;
  lineOptions: Highcharts.Options = {
    credits:{
      enabled:false
    },
    series: [{
      data: [1, 2, 3, 4, 5, 6],
      type: 'line'
    }]
  };
  //pie chart option
  pieChart: typeof Highcharts = Highcharts;
  pieOptions: Highcharts.Options = {
    chart: {

      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Browser market shares in January, 2018'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  credits:{
    enabled:false
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      type:'pie',

      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }]
  };


  // add point to chart serie




  // add point to chart serie




}
