import {
  Component,
  Injectable,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";

import { Observable, of, Subject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { AngularStickyThingsModule } from "@w11k/angular-sticky-things";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  url = "http://localhost:8080/";
  title = "the strangest title";

  quote: any;

  // @ViewChild('navbar') header: ElementRef;
  sticky = null;

  constructor(private http: HttpClient) {
    // Making Request for getting from backend
    const req = new HttpRequest("GET", this.url + "blog", {
      reportProgress: false,
      responseType: "text",
    });

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          this.quote = event.body;
        }
      },
      (error) => {
        console.log("Error", error);
        this.quote = "Error getting quote from backend";
      }
    );
  }

  ngOnInit() {}
}
