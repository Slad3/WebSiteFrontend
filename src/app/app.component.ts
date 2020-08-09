import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { Request } from './api/request.service';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  url = 'http://localhost:8080/';
  title = 'the strangest title';

  quote: string = 'Loading';

  // @ViewChild('navbar') header: ElementRef;

  constructor(private request: Request, private http: HttpClient) {
    let req = new HttpRequest('GET', this.url + 'QOTD', {
      responseType: 'text',
    });

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          console.log('here');
          this.quote = event.body.toString();
        }
      },
      (error) => {
        console.log('Error', error);
        this.quote = 'Error';
      }
    );
  }

  ngOnInit() {}
}
