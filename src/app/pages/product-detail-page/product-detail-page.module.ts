import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPagePageRoutingModule } from './product-detail-page-routing.module';

import { ProductDetailPagePage } from './product-detail-page.page';
import { IonicRatingModule } from "ionic4-rating";
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
// import { CartAtHeaderComponent } from 'src/app/components/cart-at-header/cart-at-header.component';

@NgModule({
  imports: [
    IonicRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPagePageRoutingModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [ProductDetailPagePage],
  // entryComponents:[CartAtHeaderComponent]
})
export class ProductDetailPagePageModule {}
