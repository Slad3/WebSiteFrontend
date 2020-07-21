import {Content} from './Content';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

export class YouTubeVideo extends Content {

  url: string;
  full: string;

  constructor(url: string) {
    super();
	this.url = url;
	this.full = "";

    this.full = '<p>Video</p>';
    this.full += `<iframe width="1583" height="635" src="${url}"' +
      ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' +
      ' allowfullscreen></iframe>`;
	this.full += '<p>End Video</p>';
	this.content = this.full.toString();
  }
}
