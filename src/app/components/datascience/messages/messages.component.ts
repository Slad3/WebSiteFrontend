import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  Input,
} from '@angular/core';
import { NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @Input() data: Object;

  messageGraphsToggle = false;
  searchHistoryGraphsToggle = false;

  personalAverageResponseTime: number;

  fastestResponseToMe: [];
  fastestResponseToThem: [];

  doubleTextToMe: [];
  doubleTextToThem: [];

  // Graphs and Charts

  chart1: typeof Highcharts;
  chart1Options: Highcharts.Options;
  chart1NotFound: string[];

  chart2: typeof Highcharts;
  chart2Options: Highcharts.Options;
  chart2NotFound: string[];

  chart3: typeof Highcharts;
  chart3Options: Highcharts.Options;
  chart3NotFound: string[];

  chart4: typeof Highcharts;
  chart4Options: Highcharts.Options;
  chart4NotFound: string[];

  constructor() {}

  ngOnInit(): void {}

  loadGraphs() {
    console.log('loading Graphs');
    console.log(this.data);

    if (this.data['SearchHistory'] != null) {
      // Loading chart 1
      const chart1Data = [];
      this.chart1NotFound = [];
      this.data['SearchHistory'].Frequency.forEach((search) => {
        if (search.times > 7)
          chart1Data.push({
            x: search.search,
            name: search.search,
            percent: this.formatPercent(search.percent),
            y: search.times,
            times: search.times,
          });
      });

      this.chart1 = Highcharts;
      this.chart1Options = {
        title: { text: 'Search Frequency' },
        series: [
          {
            data: chart1Data,
            type: 'pie',
          },
        ],
        tooltip: {
          formatter: function (p) {
            return '<b>' + this.key + '</b>  <b>' + this.y + ' times</b>';
          },
        },
        chart: {
          renderTo: 'container',
        },
      };

      // Loading chart 2
      // Full frequency
      const chart2Data = [];
      let chart2Categories = [];
      this.chart2NotFound = [];
      this.data['SearchHistory'].DateHistogram.histogram.forEach(
        (iteration) => {
          if (iteration.searches.length > 0) {
            chart2Categories.push(iteration.date);
            chart2Data.push({
              name: iteration.date,
              y: iteration.searches.length,
            });
          }
        }
      );

      this.chart2 = Highcharts;
      this.chart2Options = {
        title: { text: 'Search Frequency All' },
        xAxis: {
          categories: chart2Categories,
        },
        series: [
          {
            data: chart2Data,
            type: 'column',
          },
        ],
        tooltip: {
          formatter: function () {
            return (
              'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>'
            );
          },
        },
      };

      // Loading chart 3
      // Top serach frequency
      const chart3Data = [];
      let chart3Categories = [];
      this.chart3NotFound = [];
      let total = 0;
      this.data['SearchHistory'].DateHistogram.histogram.forEach(
        (iteration) => {
          if (true || this.contains(chart1Data[0].name, iteration.searches)) {
            chart3Categories.push(iteration.date);
            total += this.times(chart1Data[0].name, iteration.searches);
            chart3Data.push({ name: iteration.date, y: total });
          }
        }
      );

      this.chart3 = Highcharts;
      this.chart3Options = {
        title: {
          text: `Cumulative Search Frequency for Most Searched: ${chart1Data[0].name}`,
        },
        xAxis: {
          categories: chart3Categories,
        },
        series: [
          {
            data: chart3Data,
            turboThreshold: 0,
            type: 'area',
          },
        ],
        tooltip: {
          formatter: function () {
            return (
              'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>'
            );
          },
        },
      };

      // Loading chart 4
      // Second serach frequency
      const chart4Data = [];
      let chart4Categories = [];
      this.chart4NotFound = [];
      total = 0;
      this.data['SearchHistory'].DateHistogram.histogram.forEach(
        (iteration) => {
          if (true || this.contains(chart1Data[1].name, iteration.searches)) {
            //   console.log()
            chart4Categories.push(iteration.date);
            total += this.times(chart1Data[1].name, iteration.searches);
            chart4Data.push({ name: iteration.date, y: total });
          }
        }
      );

      this.chart4 = Highcharts;
      this.chart4Options = {
        title: {
          text: `Cumulative Search Frequency for 2nd Most Searched: ${chart1Data[1].name}`,
        },
        xAxis: {
          categories: chart4Categories,
        },
        series: [
          {
            data: chart4Data,
            turboThreshold: 0,
            type: 'area',
          },
        ],
        tooltip: {
          formatter: function () {
            return (
              'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>'
            );
          },
        },
      };

      this.searchHistoryGraphsToggle = true;
    }

    if (this.data['MessageData'] != null) {
      let totalResponse = 0;
      let messagesThreadSize = 0;

      this.data['MessageData'].MessageThreads.forEach((thread) => {
        if (thread.averageResponse[1] < 90000000) {
          messagesThreadSize++;
          totalResponse += thread.averageResponse[1];
        }
      });

      this.personalAverageResponseTime = this.data['MessageData'][
        'totalAverageResponseTime'
      ]['average'];

      this.fastestResponseToMe = this.data[
        'MessageData'
      ].totalAverageResponseTime['individuals'][0];
      this.fastestResponseToThem = this.data[
        'MessageData'
      ].totalAverageResponseTime['individuals'][1];

      this.doubleTextToMe = this.data['MessageData'].doubleMessaging[0];
      this.doubleTextToThem = this.data['MessageData'].doubleMessaging[1];

      this.messageGraphsToggle = true;
    }
  }
  
  contains(str: string, list: []): boolean {
    let contain = false;

    list.forEach((iter) => {
      if (iter == str) {
        contain = true;
      }
    });
    return contain;
  }

  times(str: string, list: string[]): number {
    let time = 0;
    list.forEach((iter) => {
      if (iter == str) {
        time++;
      }
    });
    return time;
  }

  formatPercent(num: number) {
    return (num * 100).toString().slice(0, 5) + '%';
  }
}
