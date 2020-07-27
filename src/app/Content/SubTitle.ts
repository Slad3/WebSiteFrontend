import {Content} from './Content';
import {Component, ElementRef, Input, Renderer2, OnInit, Directive} from '@angular/core';



export class SubTitle extends Content {
  content: string;
  constructor(message: string) {
    super();
    this.content = '<h2 class="subTitle">' +  message + '</h2>';
  }

}
