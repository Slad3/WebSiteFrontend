import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class Request {
  constructor(private http: HttpClient) {}

  get(url) {
    const req = new HttpRequest('GET', url, {
      responseType: 'text',
    });

    // const promise = new Promise((resolve, reject) => {
    //   this.http.request(req).subscribe(
    //     (event) => {
    //       if (event instanceof HttpResponse) {
    //         console.log('here');
    //         result = event.body.toString();
    //         resolve(event.body);
    //       }
    //     },
    //     (error) => {
    //       console.log('Error', error);
    //       reject('Error');
    //     }
    //   );
    // });

    const result =
      new Promise((resolve, reject) =>
        this.http.request(req).subscribe(
          (event) => {
            if (event instanceof HttpResponse) {
              console.log('here');
              resolve(event.body);
            }
          },
          (error) => {
            console.log('Error', error);
            reject('Error');
          }
        )
      );

    return result.then((res) => {
        return res;
    })
  }

  post(url) {
    const req = new HttpRequest('POST', url, {
      responseType: 'text',
    });

    return this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          return event.body;
        }
      },
      (error) => {
        console.log('Error', error);
        return 'Error';
      }
    );
  }
}
