import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Request } from './api/request.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { PostComponent } from './post/post.component';
import { ExperienceComponent } from './experience/experience.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    DatascienceComponent,
    ProjectsComponent,
    ReferenceComponent,
    SinglepostComponent,
    PostComponent,
    ExperienceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Request, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
