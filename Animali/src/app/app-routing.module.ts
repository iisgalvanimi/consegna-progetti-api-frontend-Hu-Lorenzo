import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruttaComponent } from './frutta/frutta.component';
import { AnimaliComponent } from './animali/animali.component';

const routes: Routes = [
  {path: '', redirectTo: '/animali', pathMatch: 'full'},
  { path: 'animali', component: AnimaliComponent},
  { path: 'frutta', component: FruttaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
