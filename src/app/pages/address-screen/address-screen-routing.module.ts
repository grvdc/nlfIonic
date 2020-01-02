import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressScreenPage } from './address-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AddressScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressScreenPageRoutingModule {}
