import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {FeedComponent} from './feed/feed.component';
import {PostComponent} from './post/post.component';
import {DatascienceComponent} from './datascience/datascience.component';


const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'datascience', component: DatascienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
