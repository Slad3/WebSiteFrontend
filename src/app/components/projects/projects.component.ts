import { Component, OnInit, Input } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Request } from '../../api/request.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input() amount: Number;
  @Input() full: boolean;
  backendUrl = 'https://dev.benbarcaskey.com/';

  dev = false;

  loaded = false;

  tempProject = {
    Project: {
      title: 'Sample Title',
      description:
        'Sample description Sample description Sample description Sample description Sample description',
      date: '1942-12-7',
      typeOfProject: 'Some Type',
      tags: ['Python', 'Flask', 'JSON', 'Apache'],
    },
  };

  projects: [];

  constructor(private request: Request, private http: HttpClient) {
    if (location.host.toString() === 'localhost:4200') {
      this.dev = true;
    //   this.backendUrl = 'http://localhost:8080/';
    } else {
      this.dev = false;
    }
  }

  ngOnInit(): void {


	this.projects = [];
	this.loadProjects();
	
	if(this.full !== undefined || (this.amount !== undefined && this.amount != 4)){
		this.full = false;
	}
	else{
		this.full = true;
	}

	if(!this.full){
		// this.projects = this.projects.slice(0, 2);
	}


    this.loaded = true;
  }

  loadProjects() {
	if(this.amount === undefined){
		this.amount = 0;
	}
	const formData: FormData = new FormData();
    formData.append('amount', this.amount.toString());

    let req = new HttpRequest('POST', this.backendUrl + 'projects', formData, {
      responseType: 'text',
    });

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          this.projects = JSON.parse(event.body.toString());
        }
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
