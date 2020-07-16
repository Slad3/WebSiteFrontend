import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the strangest title';

  // @ViewChild('navbar') header: ElementRef;
  sticky = null;



  // navStick() {
  //   if (window.pageYOffset > this.sticky) {
  //     this.header.classList.add("sticky");
  //   } else {
  //     this.header.classList.remove("sticky");
  //   }
  // }

  constructor() {

    
    // console.log(this.header.toString());
    // this.sticky = this.header.offsetTop;
  }

  ngOnInit() {
    // window.onscroll = this.navStick();

  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   if(header.position){}
  //   // console.log(event.toJSON().toString());
  // }


}
