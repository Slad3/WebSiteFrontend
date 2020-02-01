import {Content} from './Content';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

export class YouTubeVideo extends Content {

  url: string;

  constructor(url: string) {
    super();
    this.url = url;
    this.content = '<p>Video</p>';
    this.content += '<iframe width="1583" height="635" src="https://www.youtube.com/embed/zTETYF5Vw80"' +
      ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' +
      ' allowfullscreen></iframe>';
    this.content += '<p>End Video</p>';
  }
}
