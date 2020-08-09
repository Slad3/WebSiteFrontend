import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatascienceComponent } from './datascience/datascience.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'datascience', component: DatascienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }