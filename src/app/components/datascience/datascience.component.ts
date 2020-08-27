import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.css'],
})
export class DatascienceComponent implements OnInit {

	constructor(){
		// this.route.parent.params.subscribe(params => console.log(params)); 
	}
	ngOnInit(){
		let dropdown = document.getElementsByClassName("dropdown-btn")
		let i;
		for (i = 0; i < dropdown.length; i++) {
			dropdown[i].addEventListener("click", function() {
			  this.classList.toggle("active");
			  var dropdownContent = this.nextElementSibling;
			  if (dropdownContent.style.display === "block") {
				dropdownContent.style.display = "none";
			  } else {
				dropdownContent.style.display = "block";
			  }
			});
		  } 
	}




}