import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundComponent } from './shared/page-not-found-component/page-not-found.component';
import { ProductionModule } from './production/production.module';
import { CzasService } from './shared/czas.service';
import { HomeComponent } from '@arek/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import 'hammerjs';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    ProductionModule,
    DashboardModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CzasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
