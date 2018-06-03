import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@arek/shared/page-not-found-component/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'produkcja',
    loadChildren: 'app/production/production.module#ProductionModule'
  },
  {
    path: 'czasowka',
    loadChildren: 'app/czasowka/czasowka.module#CzasowkaModule'
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
