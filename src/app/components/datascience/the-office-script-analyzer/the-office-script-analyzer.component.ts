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
import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { query } from '@angular/animations';

@Component({
  selector: 'app-the-office-script-analyzer',
  templateUrl: './the-office-script-analyzer.component.html',
  styleUrls: ['./the-office-script-analyzer.component.css'],
})
export class TheOfficeScriptAnalyzerComponent implements OnInit {
  dev: boolean;
  progress: number;
  data: Object;
  backendUrl = 'localhost:8092';
 
  form: FormGroup;

  @Output() newResponse = new EventEmitter<string>();
  uploadStatus: Observable<number>;

  instructionsToggle = true;
  graphsToggle = false;

  constructor(
    private request: Request,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {

	this.form = this.formBuilder.group({
		query: "",
		person: "" 
	  });

	if (location.host.toString() === 'localhost:4200') {
		this.dev = true;
		this.backendUrl = "http://localhost:8092"
	  } else {
		this.dev = false;
	  }

  }

  ngOnInit(): void {
	this.loadThatsWhatSheSaid()
  }

  onFileChange(event) {
	// console.log('change');

	this.form.get('query').setValue(event.target.form[0].value)
	this.form.get('person').setValue(event.target.form[1].value)
  }

  onSubmitUpload() {
    if (this.form.get('query').value !== '' || this.form.get('person').value !== '') {
      this.graphsToggle = false;
      this.spinner.show();

      const response = this.request.postQuery(
		  this.form,
        this.backendUrl + '/OfficeQuery'
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
      window.alert(
        `Error`
      );
    }
  }


  loadThatsWhatSheSaid() {

	let tempQuery = "That's what she said"
	let tempPerson = ""
	document.getElementById('query').value = tempQuery
	document.getElementById('person').value = tempPerson


	this.form.get('query').setValue(tempQuery)
	this.form.get('person').setValue(tempPerson)

	this.onSubmitUpload();
  }

  loadTuna() {
	let tempQuery = "Tuna"
	let tempPerson = "Andy"
	document.getElementById('query').value = tempQuery
	document.getElementById('person').value = tempPerson


	this.form.get('query').setValue(tempQuery)
	this.form.get('person').setValue(tempPerson)

	this.onSubmitUpload();
  }

  loadIdiot() {

	let tempQuery = "Idiot"
	let tempPerson = "Dwight"
	document.getElementById('query').value = tempQuery
	document.getElementById('person').value = tempPerson


	this.form.get('query').setValue(tempQuery)
	this.form.get('person').setValue(tempPerson)

	this.onSubmitUpload();
  }

  loadGraphs() {

    // console.log('loading Graphs');
    console.log(this.data);

    this.instructionsToggle = false;



    this.graphsToggle = true;
    this.spinner.hide();
  }

}
