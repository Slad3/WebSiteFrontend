import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.css'],
})
export class DatascienceComponent implements OnInit {
  sideNav: HTMLElement;
  sticky: Number;


  constructor() {
    // this.route.parent.params.subscribe(params => console.log(params));
  }
  ngOnInit() {
	document.getElementById('sidenav').style.left = '-2px';
    let dropdown = document.getElementsByClassName('dropdown-btn');
    let i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
	}
	

	this.sideNav = document.getElementById('sidenav') as HTMLElement;
    this.sticky = this.sideNav.offsetTop;

    window.addEventListener('scroll', (event) => {
      if (window.pageYOffset >= this.sticky) {
        this.sideNav.classList.add('sticky');
      } else {
        this.sideNav.classList.remove('sticky');
      }
    });

    window.addEventListener('resize', (event) => {

      if (this.sideNav.offsetTop > 0) {
        this.sticky = this.sideNav.offsetTop;
      }
    });


  }

  openNav() {
    document.getElementById('sidenav').style.width = '180px';
	document.getElementById('sideButton').style.width = '0px';
	document.getElementById('sidenav').style.left = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    document.getElementById('sidenav').style.width = '0px';
    document.getElementById('sidenav').style.left = '-2px';
    document.getElementById('sideButton').style.width = 'auto';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }
}
