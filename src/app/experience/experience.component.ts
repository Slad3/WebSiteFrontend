import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

	experience = [
		{
		  "title": "Image Analysist/Machine Learning Engineer",
		  "experience": "Internship",
		  "place": "White House Custom Color",
		  "image": "../../assets/companyLogos/whcclogo.png",
		  "imageCredit": "Image credit to WHCC",
		  "date": "January 2nd - January 27th 2020",
		  "description": [
			"I took on a month long internship over winter break building building tools, concepts, and resources for automated analysis on professional photos for White House Custom Color. This includes face and label recognition through AWS Rekognition from images stored in S3 Buckets, creating algorithms for automated cropping, color analysis involving color clusters and product color matching, and focus recognition and mapping the focus of an image. At the end of my internship I presented my work to the management of WHCC.",
			 "Utilized Python with libraries such as OpenCV, SciPy (NumPy, Pandas, and Matplotlib), Scikit-learn, Keras, and Boto (for AWS connectivity)."
		  ],
		  "skills": [
			"Python",
			"OpenCV",
			"AWS S3",
			"AWS Rekognition",
			"Pandas",
			"NumPy",
			"MatPlotLib",
			"Scikit-Learn",
			"Keras"
		  ]
		},
		{
			"title": "Research Assistant",
			"experience": "Campus Job",
			"place": "University of Wisconsin-Stout",
			"image": "../../assets/companyLogos/UWStoutlogo.jpg",
			"imageCredit": "Image credit to UW-Stout",
			"date": "Feburary 2019 - ",
			"description": [
			  "Doing research on  ",
			  "Submitted published papers at ",
			  "Presented at",
			],
			"skills": [
			  "Java",
			  "Maven",
			  "XML/JSON Parsing",
			  "AWS",
			  "Ubuntu Server",
			  "Angular",
			]
		  }
	  ];

	  exp = this.experience.slice(1)
  
	slideIndex = 1;
  
	constructor() {}
  
	ngOnInit(): void {
	  this.showDivs(0);
	}
  
	public plusDivs(n) {
	  this.showDivs((this.slideIndex += n));
	}
  
	public currentDiv(n) {
	  this.showDivs((this.slideIndex = n));
	}
  
	public showDivs(n) {
	  let i;
	  let x = document.getElementsByClassName('mySlides');
	  let dots = document.getElementsByClassName('demo');
  
	  if (n > x.length) {
		this.slideIndex = 1;
	  }
	  if (n < 1) {
		this.slideIndex = x.length;
	  }
	  for (i = 0; i < x.length; i++) {
		let slide = x[i] as HTMLElement;
		slide.style.display = 'none';
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' w3-white', '');
	  }
	  let behind = x[this.slideIndex - 1] as HTMLElement;
	  behind.style.display = 'block';
	  dots[this.slideIndex - 1].className += ' w3-white';
	}
  }
  
