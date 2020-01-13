import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CartAtHeaderComponent } from '../components/cart-at-header/cart-at-header.component';
// import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { IonicRatingModule } from 'ionic4-rating';

@NgModule({
  imports: [
    IonicRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,CartAtHeaderComponent,],
  entryComponents:[CartAtHeaderComponent,],
})
export class HomePageModule {}
