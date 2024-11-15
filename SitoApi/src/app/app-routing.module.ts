import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuintoComponent } from './quinto/quinto.component';
import { QuartoComponent } from './quarto/quarto.component';
import { TerzoComponent } from './terzo/terzo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { PrimoComponent } from './primo/primo.component';

const routes: Routes = [
  { path: 'primo', component: PrimoComponent },
  {path: '', redirectTo: '/primo', pathMatch: 'full'},
  { path: 'secondo', component: SecondoComponent},
  { path: 'terzo', component: TerzoComponent},
  { path: 'quarto', component: QuartoComponent},
  { path: 'quinto', component: QuintoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
