import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { SinglepostComponent } from './singlepost/singlepost.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    DatascienceComponent,
    ReferenceComponent,
    HomeComponent,
    ProjectsComponent,
    ReferenceComponent,
    SinglepostComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
		HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
