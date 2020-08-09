import { Content } from "./Content";
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  Directive,
} from "@angular/core";

export class DateStruct extends Content {
  months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  content: string;
  date: Date;
  constructor(message) {
    super();
    this.date = new Date(message);
    console.log("Date ", this.date.toString());
    console.log("Date ", this.date.getDate());
    console.log("Date ", this.date.getMonth());
    console.log("Date ", this.date.getUTCMonth());

    this.content = `<p> ${this.date.getDate()}
	${this.intToMonth(this.date.getMonth())}, 
	 ${this.date.getFullYear()}</p>`;
  }

  intToMonth(num) {
    return this.months[num];
  }
}
