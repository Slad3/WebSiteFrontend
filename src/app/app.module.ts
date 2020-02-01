import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    DatascienceComponent,
    CheatsheetsComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
