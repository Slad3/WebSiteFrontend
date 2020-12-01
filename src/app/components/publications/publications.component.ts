import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  publications = [
    {
      title: 'Detecting Vulnerable C/C++ Software System Code in the Cloud',
      date: 'July 31, 2020',
	  conference: 'IEEE EIT 2020',
	  location: "Virutal",
      notes: [
        'Presented virtually due to Covid-19.'
      ],
    },
    {
      title:
        'Empirically Examining the Source Code Level Vulnerabilities in Open-Source Web Browser',
      date: 'July 9, 2020',
      conference: 'SEKE 2020',
      notes: [],
    },
    {
      title:
        'Cloud-Based Software Tool to Help Open-Source Computing Community with the Detection of Source Code Vulnerabilities and Insecure Patterns',
      date: 'April 3, 2020',
      conference: 'IEEE EIT 2020',
      notes: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
