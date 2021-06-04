import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EatsPage } from './eats.page';

const routes: Routes = [
  {
    path: '',
    component: EatsPage,
  },
  {
    path: 'eat',
    loadChildren: () => import('./eat/eat.module').then( m => m.EatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
