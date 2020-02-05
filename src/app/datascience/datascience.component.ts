import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {parseString} from 'xml2js';


@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.css']
})
export class DatascienceComponent implements OnInit {

  message =  'Message not set yet';
  data;
  url: string = 'http://127.0.0.1:5000/';

  getData() {
    let dat;
    console.log('here though');

    this.http.get(  this.url + 'load',
      { responseType: 'text' }).subscribe((data) => {
      parseString(data, { explicitArray: false }, (error, result) => {
        dat = JSON.stringify(data);
        dat = JSON.parse(dat);
        console.log(dat.toString());
        this.message = dat.toString();
      });
    });

  }

  getDataPost () {
    let dat;
    console.log('here though');

    const formData = new FormData();
    formData.append('start', '2020-01-01');
    formData.append('end', '2020-01-01');

    this.http.post(
    this.url + 'load', formData)
      .subscribe((data) => {
      parseString(data, { explicitArray: false }, (error, result) => {
        dat = JSON.stringify(data);
        dat = JSON.parse(dat);
        console.log(dat);
        this.message = dat.toString();
      });
    });

  }

  constructor(private http: HttpClient) {
    this.http = http;
    this.getData();
    console.log('Message: ' + this.message);
  }

  ngOnInit() {
  }

}
