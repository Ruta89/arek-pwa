import { DashboardUploadComponent } from './dashboard-upload/dashboard-upload.component';
import { DashboardRozneComponent } from './dashboard-rozne/dashboard-rozne.component';
import { WagaComponent } from './waga/waga.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from '@arek/dashboard/dashboard-home/dashboard-home.component';
import { DashboardGalleryComponent } from '@arek/dashboard/dashboard-gallery/dashboard-gallery.component';
import { DashboardTodoComponent } from '@arek/dashboard/dashboard-todo/dashboard-todo.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'gallery',
    component: DashboardGalleryComponent
  },
  {
    path: 'waga',
    component: WagaComponent
  },
  {
    path: 'rozne',
    component: DashboardRozneComponent
  },
  {
    path: 'upload',
    component: DashboardUploadComponent
  },
  {
    path: 'todo',
    component: DashboardTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
