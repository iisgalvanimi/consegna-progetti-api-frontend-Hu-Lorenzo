import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruttaComponent } from './frutta/frutta.component';
import { AnimaliComponent } from './animali/animali.component';
import { LoginURLComponent } from './login-url/login-url.component';

const routes: Routes = [
  { path: 'generic/:id', component: LoginURLComponent },
  {path: '', redirectTo: '/animali', pathMatch: 'full'},
  { path: 'animali', component: AnimaliComponent},
  { path: 'frutta', component: FruttaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
