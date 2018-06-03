import { ProductionDatatableComponent } from './production-datatable/production-datatable.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from '@arek/production/view/view.component';

import { MaterialModule } from '@arek/material.module';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'dialog',
    component: ProductionDatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule {}
