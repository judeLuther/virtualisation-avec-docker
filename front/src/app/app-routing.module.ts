import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
