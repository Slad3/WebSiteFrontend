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

    this.http.get(  this.url + 'file',
      { responseType: 'text' }).subscribe((data) => {
      parseString(data, { explicitArray: false }, (error, result) => {
        dat = JSON.stringify(data);
        dat = JSON.parse(dat);
        this.message = dat.toString();
        console.log(dat.type());
      });
    });
    // console.log('Dat type: ');
    // if (dat != undefined && dat != null){
    //   this.message = dat.toString();
    // }
    // else {
    //   this.message = "Didn't get dasfasfasfdasfasata";
    // }

  }

  constructor(private http: HttpClient) {
    this.http = http;
    this.getData();
    console.log('Message: ' + this.message);
  }

  ngOnInit() {

  }


}
