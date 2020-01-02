import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressScreenPageRoutingModule } from './address-screen-routing.module';

import { AddressScreenPage } from './address-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressScreenPageRoutingModule
  ],
  declarations: [AddressScreenPage]
})
export class AddressScreenPageModule {}
