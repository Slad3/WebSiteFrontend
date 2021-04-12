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
  @Input() segment: Boolean;
  backendUrl = 'https://api.benbarcaskey.com/';

  full = true;
  dev = false;

  loaded = false;

  tempProject = {
    title: 'Sample Title',
    description:
      'Sample description Sample description Sample description Sample description Sample description',
    date: '1942-12-7',
    typeOfProject: 'Some Type',
    tags: ['Sample', 'Sample', 'JSON', 'Sample'],
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
    if (this.amount === undefined || this.amount === -1) {
      this.full = true;
      this.amount = -1;
    } else {
      this.full = false;
    }

    if (this.segment !== undefined && this.segment === true) {
    } else {
      var content = document.getElementById('projectContent');
      content.classList.add('content');
    }

    this.projects = [];
    this.loadProjects();


  }

  loadProjects() {
    if (this.amount === undefined) {
      this.amount = -1;
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
		  this.loaded = true;
        }
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
