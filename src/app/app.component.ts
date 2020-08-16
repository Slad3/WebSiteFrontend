import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from './../environments/environment';
import { Request } from './api/request.service';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  backendUrl = 'http://localhost:8080/';
  title = 'the strangest title';

  navbar: any;
  body: any;
  sticky: Number;

  quote: string = 'Loading';

  constructor(private request: Request, private http: HttpClient) {
	this.getQuote();
  }

  ngOnInit() {
	this.navbar = document.getElementById('navbar')
	this.body = document.getElementById('body')
	this.sticky = this.navbar.offsetTop;
	window.addEventListener('scroll', event => {
		if (window.pageYOffset >= this.sticky) {
		  this.navbar.classList.add('sticky');
		  this.body.classList.add('bodyAfter');
				
		} else {
		  this.navbar.classList.remove('sticky');
		  this.body.classList.remove('bodyAfter');
		}
	  });
  }


  getQuote() {
    let req = new HttpRequest('GET', this.backendUrl + 'QOTD', {
      responseType: 'text',
    });

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          this.quote = event.body.toString();
        }
      },
      (error) => {
        console.log('Error', error);
        this.quote = 'Error connecting to backend server';
      }
    );
  }
}
