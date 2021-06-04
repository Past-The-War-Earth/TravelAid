import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationsPage } from './destinations.page';

const routes: Routes = [
  {
    path: '',
    component: DestinationsPage
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then( m => m.DestinationPageModule)
  },
  {
    path: 'edit-destination',
    loadChildren: () => import('./edit-destination/edit-destination.module').then( m => m.EditDestinationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationsPageRoutingModule {}
