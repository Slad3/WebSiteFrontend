import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { FeedComponent } from './components/feed/feed.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FacebookDataAnalysisComponent } from './components/facebook-data-analysis/facebook-data-analysis.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: FeedComponent },
  { path: 'experience', component: ExperienceComponent },
  {
    path: 'datascience',
    component: DatascienceComponent,
    children: [
      // {path: '', },
      { path: 'facebookAnalyzer', component: FacebookDataAnalysisComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
