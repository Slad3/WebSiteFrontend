import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FeedComponent} from './feed/feed.component';
import {DatascienceComponent} from './datascience/datascience.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {ReferenceComponent} from './reference/reference.component';
import {SinglepostComponent} from './singlepost/singlepost.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: FeedComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'datascience', component: DatascienceComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'blog/:id',
   component: SinglepostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
