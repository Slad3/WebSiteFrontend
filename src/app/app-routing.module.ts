import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { FeedComponent } from './components/feed/feed.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FacebookDataAnalysisComponent } from './components/datascience/facebook-data-analysis/facebook-data-analysis.component';
import { DatascienceHomeComponent} from './components/datascience/datascience-home/datascience-home.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: FeedComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'datacience/facebook', component: FacebookDataAnalysisComponent},
  {
    path: 'datascience',
	component: DatascienceComponent,
    children: [
	{ path: '', component: DatascienceHomeComponent },
	{ path: 'home', redirectTo: '/datascience' },
      { path: 'facebookAnalyzer', component: FacebookDataAnalysisComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
