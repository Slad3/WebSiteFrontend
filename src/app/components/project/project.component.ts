import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() data: Object;
  @Input() id: string;


  pinned = false;
  productionToggle = true;
  githubToggle = true;


  project: {
  };

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
    } else if (this.id != null) {
    } else {
      this.project = {
        title: 'Sample Title',
        description:
          'Sample description Sample description Sample description Sample description Sample description',
        lastUpdated: '1942-12-7',
        typeOfProject: 'Some Type',
        tags: ['Python', 'Flask', 'JSON', 'Apache'],
      };

      this.title = 'Personal Website';
      this.description =
        'My personal website/portfolio, hosted on GitHub pages. The frontend ofmy data science projects will most likely be hosted here.';
      this.lastUpdated = '2020-11-9';
      this.typeOfProject = 'Frontend';
      this.tags = ['TypeScript', 'HTML/CSS', 'Digital Ocean', 'Python'];

      this.links = {
        github: `https://github.com/Slad3/Slad3.github.io`,
        production: `https://benbarcaskey.com/`,
      };
    }

    this.pinned = this.project['pinned'];
    this.title = this.project['title'];
    this.description = this.project['description'];
    this.lastUpdated = this.project['date'];
    this.typeOfProject = this.project['typeOfProject'];
    this.tags = this.project['tags'];

    if (this.project['links'] !== undefined) {
      this.links = this.project['links'];
    }
  }
}
