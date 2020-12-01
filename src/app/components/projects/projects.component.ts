import { Component, OnInit } from '@angular/core';

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
      this.backendUrl = 'http://localhost:8080/';
    } else {
      this.dev = false;
    }
  }

  ngOnInit(): void {
	this.loadProjects();
	this.loaded = true;
	

  }

  loadProjects() {
	let req = new HttpRequest('GET', this.backendUrl + 'projects', {
		responseType: 'text',
	  });
  
	  this.http.request(req).subscribe(
		(event) => {
		  if (event instanceof HttpResponse) {
			  console.log(event.body)
			this.projects = JSON.parse(event.body.toString())
		  }
		},
		(error) => {
		  console.log('Error', error);
		}
	  );
}
}
