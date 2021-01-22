import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class Request {
  constructor(private http: HttpClient) {}

  get(url) {
    const req = new HttpRequest('GET', url, {
      responseType: 'text',
    });

    const progress = new Subject<number>();
    const response = new Subject<any>();

    this.http.request(req).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          // pass the percentage into the progress-stream
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          progress.complete();
          response.next(event.body);
          response.complete();
        }
      },
      (error) => {
        progress.complete();
        response.next(
          '<?xml version="1.0"?><error>The server responded with an error.</error>'
        );
        response.complete();
      }
    );
    // return the map of progress.observables
    return { status: progress.asObservable(), file: response.asObservable() };
  }

  postQuery(form, url: string) {
    const formData: FormData = new FormData();
    formData.append('query', form.get('query').value);
    formData.append('person', form.get('person').value);

    const req = new HttpRequest('POST', url, formData, {
      responseType: 'text',
    });
    const progress = new Subject<number>();
    const response = new Subject<any>();

    this.http.request(req).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          // pass the percentage into the progress-stream
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          progress.complete();
          response.next(event.body);
          response.complete();
        }
      },
      (error) => {
        progress.complete();
        response.next(
          '<?xml version="1.0"?><error>The server responded with an error.</error>'
        );
        response.complete();
      }
    );
    // return the map of progress.observables
    return { status: progress.asObservable(), file: response.asObservable() };
  }

  uploadFile(
    file: File,
    url
  ): { status: Observable<number>; file: Observable<any> } {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    // create a http-post request and pass the form

    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'text',
    });

    // create a new progress-subject for every file
    const progress = new Subject<number>();
    const response = new Subject<any>();

    // send the http-request and subscribe for progress-updates
    this.http.request(req).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          const percentDone = Math.round((100 * event.loaded) / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          progress.complete();
          response.next(event.body);
          response.complete();
        }
      },
      (error) => {
        progress.complete();
        response.next(
          '<?xml version="1.0"?><error>The server responded with an error.</error>'
        );
        response.complete();
      }
    );

    // return the map of progress.observables
    return { status: progress.asObservable(), file: response.asObservable() };
  }
  uploadSpotify(
	file: File,
	timeZone: Number,
    url
  ): { status: Observable<number>; file: Observable<any> } {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('timezone', timeZone.toString());

	// create a http-post request and pass the form
	

    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'text',
    });

    // create a new progress-subject for every file
    const progress = new Subject<number>();
    const response = new Subject<any>();

    // send the http-request and subscribe for progress-updates
    this.http.request(req).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          const percentDone = Math.round((100 * event.loaded) / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          progress.complete();
          response.next(event.body);
          response.complete();
        }
      },
      (error) => {
        progress.complete();
        response.next(
          '<?xml version="1.0"?><error>The server responded with an error.</error>'
        );
        response.complete();
      }
    );

    // return the map of progress.observables
    return { status: progress.asObservable(), file: response.asObservable() };
  }
}
