import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternaComponent } from './interna/interna.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'interna', component: InternaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
