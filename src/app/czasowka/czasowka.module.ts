import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CzasowkaRoutingModule } from './czasowka-routing.module';
import { MaterialModule } from '@arek/material.module';

import { TableComponent } from './table/table.component';
import { AddFormComponent } from '@arek/czasowka/add-form/add-form.component';
import { ArekCountdownModule } from './../shared/modules/arek-countdown/arek-countdown.module';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CzasowkaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ArekCountdownModule
  ],
  declarations: [TableComponent, AddFormComponent],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class CzasowkaModule {}
