import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDestinationPage } from './edit-destination.page';

const routes: Routes = [
  {
    path: ':destinationId',
    component: EditDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDestinationPageRoutingModule {}
