import { Component, OnInit } from '@angular/core';
import {PostComponent} from '../post/post.component';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


import {Post} from '../Post';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];
  titles: string[] = ['Tobias', 'George-Michael', 'Buster', 'Tobias Funky', 'GOB', 'Annyong'];

  constructor(
      private route: ActivatedRoute,
      private location: Location
      ) {}


  ngOnInit(): void {
    let temp: Post;
    for(let i = 0; i < 6; i++) {
      temp = new Post(this.titles[i]);
      this.posts.push(temp);
    }

    console.log('test');
  }


  goBack(): void {
    this.location.back();
    }

}
