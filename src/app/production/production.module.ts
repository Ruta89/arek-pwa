import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import {
  ShowOnDirtyErrorStateMatcher,
  ErrorStateMatcher
} from '@angular/material';

import { ProductionRoutingModule } from '@arek/production/production-routing.module';
import { ProductionService } from '@arek/shared/production.service';
import { ProductionDatatableComponent } from './production-datatable/production-datatable.component';
import { ProductionEditDialogComponent } from '@arek/production/production-edit-dialog/production-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ProductionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AddComponent,
    ViewComponent,
    DetailComponent,
    ProductionDatatableComponent,
    ProductionEditDialogComponent
  ],
  providers: [
    ProductionService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  entryComponents: [ProductionEditDialogComponent]
})
export class ProductionModule {}
