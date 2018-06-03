import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '@arek/czasowka/table/table.component';
import { AddFormComponent } from '@arek/czasowka/add-form/add-form.component';
const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'add',
    component: AddFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CzasowkaRoutingModule {}
