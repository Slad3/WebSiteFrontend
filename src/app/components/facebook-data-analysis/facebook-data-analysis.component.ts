import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Request } from '../../api/request.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-facebook-data-analysis',
  templateUrl: './facebook-data-analysis.component.html',
  styleUrls: ['./facebook-data-analysis.component.css'],
})
export class FacebookDataAnalysisComponent implements OnInit {
  data = 'asdfa';
  backendUrl = 'http://localhost:8091/upload';

  form: FormGroup;
  uploadStatus: Observable<number>;

  @Output() newResponse = new EventEmitter<string>();
  fileNeeded = false;
  toggle = false;

  constructor(
    private request: Request,
    private http: HttpClient,
	private formBuilder: FormBuilder,
	private spinner: NgxSpinnerService
  ) {
	this.form = this.formBuilder.group({
		file: ['']
	  });
  }

  ngOnInit(): void {}

  onFileChange(event) {
	  console.log("change")
	  if (event.target.files && event.target.files[0]) {
		const file = event.target.files[0];
		this.form.get("file").setValue(file);
	  }
  }

  onSubmitUpload() {
	  console.log('submit')

    if (this.form.get("file").value !== "") {
      this.spinner.show();

      const response = this.request.uploadFile(
        this.form.get("file").value,
        this.backendUrl
	  );
	  
      this.uploadStatus = response.status;
      response.file.subscribe((file) => {

		this.newResponse.emit(file);
		this.data = JSON.parse(file)
		console.log(this.data)
		this.toggle = true;
      });
    } else {
		console.log("failed")
      this.fileNeeded = false;
    }
  }


}
