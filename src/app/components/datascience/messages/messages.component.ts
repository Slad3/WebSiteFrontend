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
		doubleMessaging: [69, 69],
		MessageThreads: []
	  };
  }

  ngOnInit(): void {
	this.loadGraphs();
  }

  loadGraphs() {

    if (this.data != null) {

	this.messageThreads = this.data['MessageThreads'];
	
      this.personalAverageResponseTime = this.data[
        'totalAverageResponseTime'
      ]['average'];

      this.fastestResponseToMe = this.data['totalAverageResponseTime']['individuals'][0];
      this.fastestResponseToThem = this.data['totalAverageResponseTime']['individuals'][1];

      this.doubleTextToMe = this.data['doubleMessaging'][1];
      this.doubleTextToThem = this.data['doubleMessaging'][0];
	  

	  var topName = "";
	  topName = this.data['MessageThreads'][0].to;
	  this.onPersonSelected(topName);



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

  onPersonSelected(value) {

    this.data['MessageThreads'].forEach((element) => {
		console.log("here");
      if (element.to === value) {
        this.personData = element;
        return;
      }
    });

    console.log('Person Data: ', this.personData);
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
