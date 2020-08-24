import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Request } from '../../api/request.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ThrowStmt, NONE_TYPE } from '@angular/compiler';

import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-facebook-data-analysis',
  templateUrl: './facebook-data-analysis.component.html',
  styleUrls: ['./facebook-data-analysis.component.css'],
})
export class FacebookDataAnalysisComponent implements OnInit {
  dev: boolean;
  data: Object;
  backendUrl = 'http://localhost:8091/';

  form: FormGroup;
  uploadStatus: Observable<number>;

  @Output() newResponse = new EventEmitter<string>();
  fileNeeded = false;
  toggle = false;
  progressbarShow = true;
  progress: number;

  constructor(
    private request: Request,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.form = this.formBuilder.group({
      file: [''],
    });

    if (environment.production) {
      this.dev = true;
    } else {
      this.dev = false;
    }
  }

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

  ngOnInit(): void {
    // this.progressbar =  document.getElementById('progressbar')
    // this.progressbar.innerHTML = "asdfasdf"
    this.progress = 0;
  }

  onFileChange(event) {
    console.log('change');
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  onSubmitUpload() {
    console.log('submit');

    if (this.form.get('file').value !== '') {
      this.toggle = false;
        this.spinner.show();

      const response = this.request.uploadFile(
        this.form.get('file').value,
        this.backendUrl + 'upload'
      );

      this.uploadStatus = response.status;

      response.status.subscribe((event) => {
        this.progress = event;
        // this.progressbar.innerHTML = event.toString();
      });

      response.file.subscribe((file) => {
        this.newResponse.emit(file);
        this.data = JSON.parse(file);
        this.loadGraphs();
      });
    } else {
      this.fileNeeded = false;
    }
  }

  loadTestSuccess() {
    this.toggle = false;
    this.spinner.show();
    let req = new HttpRequest('GET', this.backendUrl + 'sample', {
      responseType: 'text',
    });

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          this.data = JSON.parse(event.body.toString());
          this.loadGraphs();
        }
      },
      (error) => {
        console.log('Error', error);
        this.data = 'Error connecting to backend server';
      }
    );
  }

  loadGraphs() {
    console.log('loading Graphs');
    console.log(this.data);
    // Loading chart 1
    const chart1Data = [];
    this.chart1NotFound = [];
    this.data['SearchHistory'].Frequency.forEach((search) => {
      if (search.times > 3)
        chart1Data.push({ name: search.search, y: search.percent });
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
        formatter: function () {
          return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>';
        },
      },
      chart: {
        renderTo: 'container',
      },
    };

    // Loading chart 2
    const chart2Data = [];
    let chart2Categories = [];
    this.chart2NotFound = [];
    this.data['SearchHistory'].DateHistogram.forEach((iteration) => {
      chart2Categories.push(iteration.date);
      chart2Data.push({ name: iteration.date, y: iteration.searches.length });
    });

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
          return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>';
        },
      },
    };

    // Loading chart 3

    const chart3Data = [];
    let chart3Categories = [];
    this.chart3NotFound = [];
    this.data['SearchHistory'].DateHistogram.forEach((iteration) => {
      if (this.contains(chart1Data[0].name, iteration.searches)) {
        //   console.log()
        chart3Categories.push(iteration.date);
        let times = this.times(chart1Data[0].name, iteration.searches);
        chart3Data.push({ name: iteration.date, y: times });
      }
    });

    this.chart3 = Highcharts;
    this.chart3Options = {
      title: { text: `Search Frequency for most searched: ${chart1Data[0].name}` },
      xAxis: {
        categories: chart3Categories,
      },
      series: [
        {
          data: chart3Data,
          type: 'column',
        },
      ],
      tooltip: {
        formatter: function () {
          return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>';
        },
      },
    };

    // Loading chart 4

    const chart4Data = [];
    let chart4Categories = [];
    this.chart4NotFound = [];
    this.data['SearchHistory'].DateHistogram.forEach((iteration) => {
      if (this.contains(chart1Data[1].name, iteration.searches)) {
        //   console.log()
        chart4Categories.push(iteration.date);
        let times = this.times(chart1Data[1].name, iteration.searches);
        chart4Data.push({ name: iteration.date, y: times });
      }
    });

    this.chart4 = Highcharts;
    this.chart4Options = {
      title: { text: `Search Frequency for second most searched: ${chart1Data[1].name}` },
      xAxis: {
        categories: chart4Categories,
      },
      series: [
        {
          data: chart4Data,
          type: 'column',
        },
      ],
      tooltip: {
        formatter: function () {
          return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>';
        },
      },
    };

    this.toggle = true;
    this.spinner.hide();
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
}
