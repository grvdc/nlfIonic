import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllComponentsPageRoutingModule } from './all-components-routing.module';

import { AllComponentsPage } from './all-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllComponentsPageRoutingModule
  ],
  declarations: [AllComponentsPage]
})
export class AllComponentsPageModule {}
