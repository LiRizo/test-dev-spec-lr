import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*views */
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
