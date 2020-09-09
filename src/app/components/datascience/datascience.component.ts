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
  @ViewChild('sidenav') sideNav: ElementRef;

  constructor() {
    // this.route.parent.params.subscribe(params => console.log(params));
  }
  ngOnInit() {
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
  }

  openNav() {
    console.log('asdfasdfsa');
    document.getElementById('sidenav').style.width = '180px';
    document.getElementById('sideButton').style.width = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    console.log('buttts');
    document.getElementById('sidenav').style.width = '0px';
    document.getElementById('sideButton').style.width = 'auto';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }
}
