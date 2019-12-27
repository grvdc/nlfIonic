import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { CartAtHeaderComponent } from '../cart-at-header/cart-at-header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartAtHeaderComponent,
    MatBadgeModule,
  ]
})
export class ComponentModule { }
