import {Content} from './Content';
import {Component, ElementRef, ViewChild} from '@angular/core';

export class Image extends Content {

  url: string;
  caption: string;

  constructor(imageUrl: string) {
    super();
    this.url = imageUrl;
    this.caption = "Wow I\'m Mr Manager!";
    this.content = '<img class="Image" width=150px src=' + this.url + '> <p class="caption">' + this.caption + '</p>';
  }

}
