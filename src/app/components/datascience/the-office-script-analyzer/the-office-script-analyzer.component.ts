import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Request } from '../../../api/request.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

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
import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { query } from '@angular/animations';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-the-office-script-analyzer',
  templateUrl: './the-office-script-analyzer.component.html',
  styleUrls: [
    './the-office-script-analyzer.component.css',
    '../../../stylesheets/QueryAnalysis.css',
  ],
})
export class TheOfficeScriptAnalyzerComponent implements OnInit {
  dev: boolean;
  progress: number;
  data: Object;
  backendUrl = 'https://api.benbarcaskey.com/ScriptAnalysis/';

  form: FormGroup;

  @Output() newResponse = new EventEmitter<string>();
  uploadStatus: Observable<number>;

  instructionsToggle = true;
  graphsToggle = false;

  query = '';
  person = '';

  constructor(
    private request: Request,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      query: '',
      person: '',
    });

    if (location.host.toString() === 'localhost:4200') {
      this.dev = true;
      // this.backendUrl = "http://localhost:8092/"
    } else {
      this.dev = false;
    }



}

  ngOnInit(): void {
	this.activatedRoute.queryParams.subscribe((params) => {
		let quote = params['quote'];
		let person = params['character'];
		if (quote !== undefined || person !== undefined) {
		  if (quote !== undefined) {
		    let queryElement: HTMLInputElement = document.getElementById(
		      'query'
		    ) as HTMLInputElement;
		    queryElement.value = quote;
  
			this.form.get('query').setValue(quote);
		  }
		  if (person !== undefined) {
			  let personElement: HTMLInputElement = document.getElementById(
			  	'person'
			    ) as HTMLInputElement;
			    personElement.value = person;
  
  
			this.form.get('person').setValue(person);
		  }
		  
		  this.onSubmitUpload()
		}
		else{
			this.loadThatsWhatSheSaid();
		}
	  });
	
  }

  onFileChange(event) {
    this.form.get('query').setValue(event.target.form[0].value);
    this.form.get('person').setValue(event.target.form[1].value);
  }

  onSubmitUpload() {
    if (
      this.form.get('query').value !== '' ||
      this.form.get('person').value !== ''
    ) {
      this.graphsToggle = false;
      this.spinner.show();
      this.query = this.form.get('query').value;
      if (this.query === '') {
        this.query = 'All quotes';
      }
      const response = this.request.postQuery(
        this.form,
        this.backendUrl + 'TheOfficeQuery'
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
      });
    } else {
      window.alert(`Please populate at least one of the text boxes`);
    }
  }

  loadThatsWhatSheSaid() {
    let tempQuery = "That's what she said";
    let tempPerson = '';
    let queryElement: HTMLInputElement = document.getElementById(
      'query'
    ) as HTMLInputElement;
    queryElement.value = tempQuery;
    let personElement: HTMLInputElement = document.getElementById(
      'person'
    ) as HTMLInputElement;
    personElement.value = tempPerson;

    this.form.get('query').setValue(tempQuery);
    this.form.get('person').setValue(tempPerson);

    this.onSubmitUpload();
  }

  loadTuna() {
    let tempQuery = 'Tuna';
    let tempPerson = 'Andy';
    let queryElement: HTMLInputElement = document.getElementById(
      'query'
    ) as HTMLInputElement;
    queryElement.value = tempQuery;
    let personElement: HTMLInputElement = document.getElementById(
      'person'
    ) as HTMLInputElement;
    personElement.value = tempPerson;

    this.form.get('query').setValue(tempQuery);
    this.form.get('person').setValue(tempPerson);

    this.onSubmitUpload();
  }

  loadIdiot() {
    let tempQuery = 'Idiot';
    let tempPerson = 'Dwight';
    let queryElement: HTMLInputElement = document.getElementById(
      'query'
    ) as HTMLInputElement;
    queryElement.value = tempQuery;
    let personElement: HTMLInputElement = document.getElementById(
      'person'
    ) as HTMLInputElement;
    personElement.value = tempPerson;

    this.form.get('query').setValue(tempQuery);
    this.form.get('person').setValue(tempPerson);

    this.onSubmitUpload();
  }

  loadGraphs() {
    this.instructionsToggle = false;

    this.graphsToggle = true;
    this.spinner.hide();
  }
}
