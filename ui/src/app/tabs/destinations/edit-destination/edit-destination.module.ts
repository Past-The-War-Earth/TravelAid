import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDestinationPageRoutingModule } from './edit-destination-routing.module';

import { EditDestinationPage } from './edit-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDestinationPageRoutingModule
  ],
  declarations: [EditDestinationPage]
})
export class EditDestinationPageModule {}
