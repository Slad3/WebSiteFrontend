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


  messageThreads: [];

  messageGraphsToggle = false;

  personalAverageResponseTime: number;

  fastestResponseToMe: [];
  fastestResponseToThem: [];

  doubleTextToMe: [];
  doubleTextToThem: [];

  personData: any;

  // Graphs and Charts

  messageHistogram: typeof Highcharts;
  messageHistogramOptions: Highcharts.Options;
  messageHistogramNotFound: string[];

  messageWeekDayHistogram: typeof Highcharts;
  messageWeekDayHistogramOptions: Highcharts.Options;
  messageWeekDayHistogramNotFound: string[];

  
  constructor() {
    this.personData = {
		to: 'Sample',
		numberOfMessages: 69,
	  };
  }

  ngOnInit(): void {
	this.loadGraphs();
  }

  loadGraphs() {
    console.log('Messages: ', this.data);

    if (this.data['MessageData'] != null) {
      let totalResponse = 0;
      let messagesThreadSize = 0;


      this.personalAverageResponseTime = this.data['MessageData'][
        'totalAverageResponseTime'
      ]['average'];

      this.fastestResponseToMe = this.data['MessageData'].totalAverageResponseTime['individuals'][0];
      this.fastestResponseToThem = this.data['MessageData'].totalAverageResponseTime['individuals'][1];

      this.doubleTextToMe = this.data['MessageData'].doubleMessaging[0];
      this.doubleTextToThem = this.data['MessageData'].doubleMessaging[1];

	  this.messageGraphsToggle = true;
	  

	//   topName = 

	}
	
	this.messageGraphsToggle = true;
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

  onPersonSelected(value) {

    this.data['MessageData'].MessageThreads.forEach((element) => {
      if (element.to === value) {
        this.personData = element;
        return;
      }
    });

    console.log('Person Data: ' + this.personData);
	this.loadMessageHistogram(this.personData)
    return;
  }

  loadMessageHistogram(person){

		// Loading Histogram
		  const messageHistogramData = [];
		  let messageHistogramCategories = [];
		  this.messageHistogramNotFound = [];
				
		person.hourHistogram.forEach(element => {
			 messageHistogramCategories.push(element.time);
			 messageHistogramData.push(element.value);
		 });
	
		  this.messageHistogram = Highcharts;
		  this.messageHistogramOptions = {
			title: {
			  text: `Messages per Hour`,
			},
			xAxis: {
			  categories: messageHistogramCategories,
			},
			series: [
			  {
				data: messageHistogramData,
				type: 'column',
				color: '#005522',
				name: 'Total Time in Hour'
			  },
			],
			tooltip: {
			  formatter: function () {
				return (
				  this.y + ' times</b>'
				);
			  },
			},
		  };
		

		// Loading Histogram
			const messageWeekDayHistogramData = [];
			let messageWeekDayHistogramCategories = [];
			this.messageWeekDayHistogramNotFound = [];
				
		person.dayHistogram.forEach(element => {
				messageWeekDayHistogramCategories.push(element.day);
				messageWeekDayHistogramData.push(element.value);
			});
	
			this.messageWeekDayHistogram = Highcharts;
			this.messageWeekDayHistogramOptions = {
			title: {
				text: `Messages per Weekday`,
			},
			xAxis: {
				categories: messageWeekDayHistogramCategories,
			},
			series: [
				{
				data: messageWeekDayHistogramData,
				type: 'column',
				color: '#005522',
				name: 'Total Times in Day'
				},
			],
			tooltip: {
				formatter: function () {
				return (
					this.y + ' times</b>'
				);
				},
			},
			};
  }
}
