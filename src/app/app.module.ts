import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Request } from './api/request.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './components/feed/feed.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { PostComponent } from './components/post/post.component';
import { ExperienceComponent } from './components/experience/experience.component';

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
