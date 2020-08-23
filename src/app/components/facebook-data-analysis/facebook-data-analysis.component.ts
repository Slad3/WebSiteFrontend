import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-facebook-data-analysis',
  templateUrl: './facebook-data-analysis.component.html',
  styleUrls: ['./facebook-data-analysis.component.css'],
})
export class FacebookDataAnalysisComponent implements OnInit {
  data: Object;
  backendUrl = 'http://localhost:8091/';

  form: FormGroup;
  uploadStatus: Observable<number>;

  @Output() newResponse = new EventEmitter<string>();
  fileNeeded = false;
  toggle = false;

  @ViewChild('progressbar') progressbar: any
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
  }

  // Graphs and Charts

  chart1: typeof Highcharts;
  chart1Options: Highcharts.Options;
  chart1NotFound: string[];

  chart2: typeof Highcharts;
  chart2Options: Highcharts.Options;
  chart2NotFound: string[];

  ngOnInit(): void {
	// this.progressbar =  document.getElementById('progressbar') as HTMLElement
	this.progressbar.innerHTML = "asdfasdf"
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
      this.spinner.show();

      const response = this.request.uploadFile(
        this.form.get('file').value,
        this.backendUrl + 'upload'
      );

      this.uploadStatus = response.status;

        response.status.subscribe((event) => {
			this.progress = event
			this.progressbar.innerHTML = event.toString();
        })
  

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

    const chart1Data = [];
    this.chart1NotFound = [];
    console.log(this.data);
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
    };

    this.toggle = true;
    this.spinner.hide();
  }
}
