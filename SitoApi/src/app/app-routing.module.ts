import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

  const routes: Routes = [
    { path: 'cards', component: CardComponent },
    { path: 'cards/:set', component: CardComponent },
    { path: 'cards/:name', component: CardComponent },
    { path: '', redirectTo: '/cards', pathMatch: 'full' }
  ];
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
