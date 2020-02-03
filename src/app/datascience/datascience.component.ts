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

  message: string =  'Message not set yet';
  url: string = 'http://127.0.0.1:5000/index';

  constructor(private http: HttpClient) {
    this.http = http;
    this.message = this.getData();
  }

  ngOnInit() {

  }

  getData(): string {
    console.log('here though');
    this.http.get(  this.url,
      { responseType: 'text' }).subscribe((data) => {
      parseString(data, { explicitArray: false }, (error, result) => {
        console.log('Resulasdft:\t' + result);
        return result;
      });
  });

    console.log('what');
    return 'not worked';
  }
}
