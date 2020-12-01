import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() data: Object;
  @Input() id: string;


  project: { title; description; tags; typeOfProject; lastUpdated; links };

  title: string;
  description: string;
  tags = [];
  typeOfProject: string;
  lastUpdated: string;
  links = {
    github: '',
    production: '',
  };

  constructor() {}

  ngOnInit(): void {
    if (this.data != null) {
      this.project = this.data['Project'];
      this.title = this.project['title'];
      this.description = this.project['description'];
      this.lastUpdated = this.project['date'];
      this.typeOfProject = this.project['typeOfProject'];
      this.tags = this.project['tags'];

      if (this.project['links'] !== undefined) {
        this.links = this.project['links'];
      }
    } else if (this.id != null) {
    } else {
      this.title = 'Personal Website';
      this.description =
        'My personal website/portfolio, hosted on GitHub pages. The frontend ofmy data science projects will most likely be hosted here.';
      this.lastUpdated = ' 2020-11-9';
      this.typeOfProject = 'Frontend';
      this.tags = ['TypeScript', 'HTML/CSS', 'Digital Ocean', 'Python'];

      this.links = {
        github: `https://github.com/Slad3/Slad3.github.io`,
        production: `https://benbarcaskey.com/`,
      };
	}
  }

}
