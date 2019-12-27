import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopBycaegoriePageRoutingModule } from './shop-bycaegorie-routing.module';

import { ShopBycaegoriePage } from './shop-bycaegorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopBycaegoriePageRoutingModule
  ],
  declarations: [ShopBycaegoriePage]
})
export class ShopBycaegoriePageModule {}
