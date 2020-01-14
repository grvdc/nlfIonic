import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponentsPage } from './all-components.page';

const routes: Routes = [
  {
    path: '',
    component: AllComponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllComponentsPageRoutingModule {}
