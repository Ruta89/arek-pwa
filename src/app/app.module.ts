import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundComponent } from './shared/page-not-found-component/page-not-found.component';
import { ProductionModule } from './production/production.module';
import { CzasService } from './shared/czas.service';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,

    AngularFireModule.initializeApp(environment.firebaseConfig, 'apka-arek-pwa'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ProductionModule,
    DashboardModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [CzasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
