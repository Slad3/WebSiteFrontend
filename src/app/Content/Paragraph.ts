import {Content} from './Content';
import {Component, ElementRef, Input, Renderer2, OnInit, Directive} from '@angular/core';



export class Paragraph extends Content {
  content: string;
  constructor(message: string) {
    super();
    this.content = '<p>' +  message + '</p>';
  }

}
