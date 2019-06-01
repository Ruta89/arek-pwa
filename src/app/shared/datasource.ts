import { CzasService } from '../shared/czas.service';
import { DataSource } from '@angular/cdk/collections';
import { ProductionService } from '@arek/shared/production.service';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Production } from '@arek/shared/model';

export class CzasDataSource extends DataSource<any> {
  constructor(private czasService: CzasService) {
    super();
  }
  connect() {
    return this.czasService.czasy$;
  }

  disconnect() {}
}

export class MyDataSource extends DataSource<any> {
  constructor(private pService: ProductionService) {
    super();
  }
  connect(): Observable<Production[]> {
    return this.pService.productions$;
  }

  disconnect() {}
}
