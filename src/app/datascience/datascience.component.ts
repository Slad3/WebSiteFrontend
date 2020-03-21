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

  message =  'Loading';
  data;
  url = 'http://127.0.0.1:5000/';

  getCrimeData() {
    let data;
    console.log('here though');

    const formData = new FormData();
    formData.append('start', '2018-11-01');
    formData.append('end', '2020-01-01');

    this.http.post(
    this.url + 'loadCrimeData', formData)
      .subscribe((dat) => {
      parseString(dat, { explicitArray: false }, (error, result) => {
        data = JSON.stringify(dat);
        data = JSON.parse(data);
        console.log(data);
        console.log(data.toString());
        this.message = data[0]['ZIP'].toString();
        this.data = data;
      });
    });


  }

  // getWeatherData(){
  //   let data;
  //   const formData = new FormData();
  //   formData.append('start', '2019-11-01');
  //   formData.append('end', '2020-01-01');
  //
  //   this.http.post(
  //     this.url + 'loadCrimeData', formData)
  //     .subscribe((dat) => {
  //       parseString(dat, { explicitArray: false }, (error, result) => {
  //         data = JSON.stringify(dat);
  //         data = JSON.parse(data);
  //         console.log(data);
  //         console.log(data.toString());
  //         this.message = data[0]['ZIP'].toString();
  //         this.data = data;
  //       });
  //     });
  // }


  constructor(private http: HttpClient) {
    this.http = http;
    this.getCrimeData();
    console.log('Message: ' + this.message);
  }

  ngOnInit() {
  }

}
