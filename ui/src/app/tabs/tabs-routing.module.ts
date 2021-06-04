import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'destinations',
        loadChildren: () => import('./destinations/destinations.module').then( m => m.DestinationsPageModule)
      },
      {
        path: 'activities/:destinationId',
        loadChildren: () => import('./activities/activities.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'eats/:destinationId',
        loadChildren: () => import('./eats/eats.module').then(m => m.Tab3PageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
