import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  backendUrl = 'http://localhost:8080/';
  title = 'the strangest title';

  navbar: any;
  body: any;
  socialGroup: any;
  sticky: Number;

  quote: string = 'Loading';

  constructor(private request: Request, private http: HttpClient) {
	// this.getQuote();
	




  }

  ngOnInit() {
    this.navbar = document.getElementById(
      'navbarTop'
    ) as HTMLElement;
    this.body = document.getElementById('body') as HTMLElement;
    this.sticky = this.navbar.offsetTop;

    window.addEventListener('scroll', (event) => {
      if (window.pageYOffset >= this.sticky) {
        this.navbar.classList.add('sticky');
        this.body.classList.add('bodyAfter');
      } else {
        this.navbar.classList.remove('sticky');
        this.body.classList.remove('bodyAfter');
      }
    });

    window.addEventListener('resize', (event) => {
      if (this.navbar.offsetTop > 0) {
        this.sticky = this.navbar.offsetTop;
      }
    });

  }


  dropDownMenu() {
	var x = document.getElementById("linkList");

	console.log("here")
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
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

  mobileNav() {
    var x = document.getElementById('navItems');
    if (x.classList.contains('hide')) {
      console.log('collapse');
      x.classList.remove('hide');
    } else {
      console.log('expand');
      x.classList.add('hide');
    }
  }
}
