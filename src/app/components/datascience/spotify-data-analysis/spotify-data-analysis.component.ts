import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Request } from '../../../api/request.service';
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
import { ThrowStmt, NONE_TYPE, ConstantPool } from '@angular/compiler';

import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-spotify-data-analysis',
  templateUrl: './spotify-data-analysis.component.html',
  styleUrls: [
    './spotify-data-analysis.component.css',
    '../../../stylesheets/DataAnalysis.css',
  ],
})
export class SpotifyDataAnalysisComponent implements OnInit {
  dev: boolean;
  data: Object;

  backendUrl = 'https://api.benbarcaskey.com/SpotifyAnalysis/';

  maxFileSizeMB = 200;

  form: FormGroup;
  uploadStatus: Observable<number>;

  @Output() newResponse = new EventEmitter<string>();
  fileNeeded = false;

  instructionsToggle = true;
  individualToggle = false;
  graphsToggle = false;
  progressBarToggle = false;
  fileErrorToggle = false;
  emptyResultToggle = false;

  progress: number;

  topSongs: [];
  songData: any;

  // Graphs and Charts

  hourHistogram: typeof Highcharts;
  hourHistogramOptions: Highcharts.Options;
  hourHistogramNotFound: string[];

  dayHistogram: typeof Highcharts;
  dayHistogramOptions: Highcharts.Options;
  dayHistogramNotFound: string[];

  dateHistogram: typeof Highcharts;
  dateHistogramOptions: Highcharts.Options;
  dateHistogramNotFound: string[];

  constructor(
    private request: Request,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.form = this.formBuilder.group({
      file: [''],
      timezone: 0,
    });
    if (location.host.toString() === 'localhost:4200') {
      this.dev = true;
      this.backendUrl = 'http://localhost:8093/';
    } else {
      this.dev = false;
    }

    this.instructionsToggle = true;
  }

  ngOnInit(): void {
    let timezone = document.getElementById('timezone') as HTMLInputElement;
    timezone.value = "-69";

    // this.form.get('timezone').setValue(timezone.value);
    this.form.get('timezone').setValue(-8);

    // this.loadTestSuccess();
  }

  onFileChange(event) {
    // console.log('change');
    if (event.target.files && event.target.files[0]) {
      let size = event.target.files[0].size / 1024 / 1024;
      // console.log(size)
      if (size < this.maxFileSizeMB) {
        const file = event.target.files[0];
        this.form.get('file').setValue(file);
      } else {
        window.alert(
          `File over ${this.maxFileSizeMB}, cosider unzipping and deleting a bunch fo videos and pictures`
        );
      }
    }
  }

  onTimeZoneChange(event) {
    this.form.get('timezone').setValue(event.target.form[1].value);
  }

  onSubmitUpload() {
    if (this.form.get('file').value !== '') {
      this.graphsToggle = false;
      this.spinner.show();
      this.progressBarToggle = true;

      const response = this.request.uploadSpotify(
        this.form.get('file').value,
        // this.form.get('timezone').value,
        -8,
        this.backendUrl + 'parse'
      );

      this.uploadStatus = response.status;

      response.status.subscribe((event) => {
        this.progress = event;
        // this.progressbar.innerHTML = event.toString();
      });
      this.data = null;
      response.file.subscribe((file) => {
        try {
          this.newResponse.emit(file);
          this.data = JSON.parse(file);
          this.loadGraphs();
        } catch (error) {
          alert('Error connecting to backend Server');
          this.spinner.hide();
        }
        this.progressBarToggle = false;
      });
    } else {
      window.alert(
        `Add a file under ${this.maxFileSizeMB} Mb before uploading`
      );
      this.fileNeeded = false;
    }
  }

  loadTestSuccess() {
    this.graphsToggle = false;
    this.spinner.show();
    this.data = null;
    console.log('here');
    let req = new HttpRequest('GET', 'http://localhost:8093/' + 'sample', {
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
        this.spinner.hide();
        alert('Error Connecting to Server');
      }
    );
  }

  loadGraphs() {
    this.instructionsToggle = false;

    console.log(this.data);

    if (this.data['topSongs'] !== undefined) {
      this.topSongs = this.data['topSongs'];

      var topName = '';
      topName = this.data['topSongs'][0].title;
      console.log(topName);
      this.onSongSelected(topName);
    }

    this.graphsToggle = true;

    this.spinner.hide();
  }

  onSongSelected(value) {
    this.individualToggle = false;

    this.topSongs.forEach((element) => {
      if (element['title'] === value) {
        this.songData = element;
        return;
      }
    });

    this.loadSongHistogram(this.songData);

    this.individualToggle = true;

    return;
  }

  loadSongHistogram(song) {
    console.log(song);

    let color = '#005522';

    // Hour Histogram
    const hourHistogramData = [];
    let hourHistogramCategories = [];
    this.hourHistogramNotFound = [];

    song.hourHistogram.forEach((element) => {
      hourHistogramCategories.push(element.hour);
      hourHistogramData.push(element.times);
    });

    this.hourHistogram = Highcharts;

    this.hourHistogramOptions = {
      title: {
        text: `Times per Hour`,
      },
      xAxis: {
        categories: hourHistogramCategories,
      },
      series: [
        {
          data: hourHistogramData,
          type: 'column',
          color: color,
          name: 'Total Time in Hour',
        },
      ],
      tooltip: {
        formatter: function () {
          return this.y + ' times</b>';
        },
      },
    };

    // Loading Histogram
    const dayHistogramData = [];
    let dayHistogramCategories = [];
    this.dayHistogramNotFound = [];

    song.dayHistogram.forEach((element) => {
      var date: Number = +element.date;
      dayHistogramCategories.push(this.dateToWeekDay(date));
      dayHistogramData.push(element.times);
    });

    this.dayHistogram = Highcharts;
    this.dayHistogramOptions = {
      title: {
        text: `Times per Weekday`,
      },
      xAxis: {
        categories: dayHistogramCategories,
      },
      series: [
        {
          data: dayHistogramData,
          type: 'column',
          color: color,
          name: 'Total Times per weekday',
        },
      ],
      tooltip: {
        formatter: function () {
          return this.y + ' times</b>';
        },
      },
    };

    // date Histogram
    const dateHistogramData = [];
    let dateHistogramCategories = [];
    this.dateHistogramNotFound = [];

    song.dateHistogram.forEach((element) => {
      dateHistogramCategories.push(element.date);
      dateHistogramData.push(element.times);
    });

    this.dateHistogram = Highcharts;

    this.dateHistogramOptions = {
      title: {
        text: `Times per Date`,
      },
      xAxis: {
        categories: dateHistogramCategories,
      },
      series: [
        {
          data: dateHistogramData,
          type: 'column',
          color: color,
          name: 'Total Time in Date',
        },
      ],
      tooltip: {
        formatter: function () {
          return this.y + ' times</b>';
        },
      },
    };
  }

  dateToWeekDay(input) {
    var value = '';
    switch (input) {
      case 0: {
        value = 'Sunday';
        break;
      }
      case 1: {
        value = 'Monday';
        break;
      }
      case 2: {
        value = 'Tuesday';
        break;
      }
      case 3: {
        value = 'Wednesday';
        break;
      }
      case 4: {
        value = 'Thurdsay';
        break;
      }
      case 5: {
        value = 'Friday';
        break;
      }
      case 6: {
        value = 'Saturday';
        break;
      }
    }

    return value;
  }
}
