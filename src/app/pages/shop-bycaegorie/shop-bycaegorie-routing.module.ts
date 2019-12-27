import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopBycaegoriePage } from './shop-bycaegorie.page';

const routes: Routes = [
  {
    path: '',
    component: ShopBycaegoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopBycaegoriePageRoutingModule {}
