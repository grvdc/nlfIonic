import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicePagePage } from './invoice-page.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicePagePageRoutingModule {}
