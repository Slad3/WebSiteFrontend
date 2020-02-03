import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {FeedComponent} from './feed/feed.component';
import {DatascienceComponent} from './datascience/datascience.component';
import {CheatsheetsComponent} from './cheatsheets/cheatsheets.component';


const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'datascience', component: DatascienceComponent },
  { path: 'cheatsheets', component: CheatsheetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
