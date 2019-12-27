import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailPagePageModule } from '../product-detail-page/product-detail-page.module';
import { HomePageModule } from 'src/app/home/home.module';
import { CartAtHeaderComponent } from 'src/app/components/cart-at-header/cart-at-header.component';



@NgModule({
  declarations: [CartAtHeaderComponent],
  entryComponents:[CartAtHeaderComponent],
  imports: [
    CommonModule,
    ProductDetailPagePageModule,
    HomePageModule,
    
  ]
})
export class AllPageModuleModule { }
