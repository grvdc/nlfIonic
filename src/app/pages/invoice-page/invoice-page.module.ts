import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicePagePageRoutingModule } from './invoice-page-routing.module';

import { InvoicePagePage } from './invoice-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicePagePageRoutingModule
  ],
  declarations: [InvoicePagePage]
})
export class InvoicePagePageModule {}
