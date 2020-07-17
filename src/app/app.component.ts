import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { request } from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = "localhost:8080/QOTD"
  title = 'the strangest title';

  quote = "Quote server not working";

  // @ViewChild('navbar') header: ElementRef;
  sticky = null;



  constructor() {

    console.log("here");

    // const req = request(
    //   {
    //     host: this.url,
    //     path: '',
    //     method: 'GET',
    //   },
    //   response => {
    //     console.log(response.statusCode); // 200
    //   }
    // );
    // console.log(req);

  }
 


  ngOnInit() {


    // this.quote = this.http.get(url);

  }



}
