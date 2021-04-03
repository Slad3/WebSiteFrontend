import { Component, Input, OnInit } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Request } from '../../api/request.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  @Input() full: boolean;

  backendUrl = 'https://api.benbarcaskey.com/';
  dev = false;

  loaded = false;

  publications = []

//   publications = [] [
//     {
//       title: 'Detecting Vulnerable C/C++ Software System Code in the Cloud',
//       date: 'July 31, 2020',
//       conference: 'IEEE EIT 2020',
//       location: 'Virutal',
//       notes: ['Presented virtually due to Covid-19.'],
//     },
//     {
//       title:
//         'Empirically Examining the Source Code Level Vulnerabilities in Open-Source Web Browser',
//       date: 'July 9, 2020',
//       conference: 'Software Engineering & Knowledge Engineering 2020',
//       notes: [],
//     },
//     {
//       title:
//         'Cloud-Based Software Tool to Help Open-Source Computing Community with the Detection of Source Code Vulnerabilities and Insecure Patterns',
//       date: 'April 3, 2020',
//       conference: 'Midwest Instruction and Computing 2020',
//       notes: ['Presented virtually due to Covid-19.'],
//     },
//     {
//       title:
//         'How to Empirically Assess the Quality of Software Source Code in The Era of Multicore Architecture and Multithreaded Programming',
//       date: 'April 5, 2019',
//       conference: 'Midwest Instruction and Computing 2019',
//       notes: ['Presented at NDSU'],
//     },
//   ];

  constructor(private request: Request, private http: HttpClient) {
    if (location.host.toString() === 'localhost:4200') {
      this.dev = true;
        this.backendUrl = 'http://localhost:8080/';
    } else {
      this.dev = false;
    }
  }

  ngOnInit(): void {
    if (this.full === undefined) {
      this.full = true;
    } else {
      this.full = false;
    }

	this.loadPublications()

  }

  loadPublications() {
    let req = new HttpRequest(
      'GET',
      this.backendUrl + 'publications',
      {
        responseType: 'text',
      }
    );

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          this.publications = JSON.parse(event.body.toString());
		  this.loaded = true;
        }
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
