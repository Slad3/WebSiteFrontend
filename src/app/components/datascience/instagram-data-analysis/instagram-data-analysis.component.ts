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
  selector: 'app-instagram-data-analysis',
  templateUrl: './instagram-data-analysis.component.html',
  styleUrls: ['./instagram-data-analysis.component.css'],
})
export class InstagramDataAnalysisComponent implements OnInit {
  dev: boolean;
  data: Object;

  backendUrl = 'https://dev.benbarcaskey.com/SocialMedia/';

  maxFileSizeMB = 200;

  form: FormGroup;
  uploadStatus: Observable<number>;

  @Output() newResponse = new EventEmitter<string>();
  fileNeeded = false;

  instructionsToggle = true;
  graphsToggle = false;
  progressBarToggle = false;

  messageGraphsToggle = false;
  accountHistoryToggle = false;
  fileErrorToggle = false;
  emptyResultToggle = false;

  progress: number;

  accountHistory: [];

  constructor(
    private request: Request,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.form = this.formBuilder.group({
      file: [''],
    });
    if (location.host.toString() === 'localhost:4200') {
      this.dev = true;
      this.backendUrl = 'http://localhost:8091/';
    } else {
      this.dev = false;
    }

    this.instructionsToggle = true;
  }

  ngOnInit(): void {
	  this.loadTestSuccess()
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

  onSubmitUpload() {
    if (this.form.get('file').value !== '') {
      this.graphsToggle = false;
      this.spinner.show();
      this.progressBarToggle = true;

      const response = this.request.uploadFile(
        this.form.get('file').value,
        this.backendUrl + 'instagram'
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
    let req = new HttpRequest('GET', 'http://localhost:8091/' + 'sample', {
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

	console.log(this.data)
    if (this.data['MessageData'] != null) {
      this.messageGraphsToggle = true;
      this.fileErrorToggle = false;
	}

	if (this.data['AccountHistory'] != null) {
      this.accountHistory = this.data['AccountHistory'];
      this.accountHistoryToggle = true;
      this.fileErrorToggle = false;
	} 


    this.graphsToggle = true;

    this.spinner.hide();
  }
}
