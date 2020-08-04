import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";

import { Post } from "../Post";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  url = "http://localhost:8080/";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {
	this.updatePosts();
  }

  ngOnInit(): void {

    console.log("test");
  }

  goBack(): void {
    this.location.back();
  }

  updatePosts(){
    const req = new HttpRequest("GET", this.url + "blog", {
		reportProgress: false,
		responseType: "text",
	  });
  
	  this.http.request(req).subscribe(
		(event) => {
		  if (event instanceof HttpResponse) {
			console.log(typeof event.body)
			if (typeof event.body === "string") {
			  let received = JSON.parse(event.body);
			  console.log(received);
  
			  for(let po in received){
				  let temp = JSON.parse(received[po]);
				  console.log(temp)
				  this.posts.push(new Post(temp.Post))
			  }
			}
		  }
		},
		(error) => {
		  console.log("Error", error);
		}
	  );

  }
}
