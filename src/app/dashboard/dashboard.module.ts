import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ngx-gallery/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardGalleryComponent } from './dashboard-gallery/dashboard-gallery.component';

import { MaterialModule } from '@arek/material.module';
import { WagaComponent } from './waga/waga.component';
import { DashboardRozneComponent } from './dashboard-rozne/dashboard-rozne.component';
import { DashboardUploadComponent } from './dashboard-upload/dashboard-upload.component';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { DashboardTodoComponent } from './dashboard-todo/dashboard-todo.component';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    DashboardRoutingModule,
    MaterialModule,
    GalleryModule.forRoot(),
    AngularFireStorageModule
  ],
  declarations: [
    DashboardHomeComponent,
    DashboardGalleryComponent,
    WagaComponent,
    DashboardRozneComponent,
    DashboardUploadComponent,
    DashboardTodoComponent
  ]
})
export class DashboardModule {}
