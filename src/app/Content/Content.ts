import {Component, ElementRef, Input, Renderer2, OnInit, Directive} from '@angular/core';

export class Content {
  type: string;
  title: string;
  content: string;

  constructor() {
    this.content = '<p> No Content Loaded</p>';
  }

  output() {
    return this.content;
  }

}
