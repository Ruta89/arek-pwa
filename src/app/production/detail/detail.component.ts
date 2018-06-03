import { ActivatedRoute, Router } from '@angular/router';
import { ProductionService } from '@arek/shared/production.service.ts';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Production } from '@arek/shared/model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  @Input() production: Production;
  @Input() idd;

  id: number;
  show;
  private sub: any;

  private itemDoc: AngularFirestoreDocument<Production>;
  item: Observable<Production>;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    router: Router
  ) {
    this.itemDoc = afs.doc<Production>('productions/' + this.id);
    this.item = this.itemDoc.valueChanges();
  }
  update(item: Production) {
    this.itemDoc.update(item);
  }
  // id: number;
  // private sub: any;

  // private itemDoc: AngularFirestoreDocument<Item>;
  // item: Observable<Item>;

  // constructor(
  //   private productionService: ProductionService,
  //   private route: ActivatedRoute
  // ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      // console.log('this.id: ', this.id);
      // });
      // if (id) {
      //   this.value = this.router.params('pozycja');
      //   this.id = this.value.$key;
      //   this.note = this.value.notatka;
      // } else {
      //   this.navCtrl.setRoot('PracaPage');
      // }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

//   if (this.value) {
//     // ustawianie tolerancji
//     const proc = 0.01 * this.value.l1; // 0.02
//     this.min = this.value.l1 - proc;
//     this.max = this.value.l1 * 1 + proc * 1;

//     // ustawianie licznika -------------------------------------------------------
//     // od 1t do 4
//     if (this.value.wll >= 1 && this.value.wll <= 4) {
//       const licz = this.value.l1 * 1 * 22;
//     }
//     // od 5t  do 8
//     if (this.value.wll >= 5 && this.value.wll <= 8) {
//       const licz = this.value.l1 * 1 * 20;
//     }

//     // Format zlecenia -------------------------------------------------------------------
//     if (this.value.auf.length > 8) {
//       // format auf
//       const auf1 = this.value.auf.substr(0, 6); // 777888
//       const auf2 = this.value.auf.substr(6, 2); // 01
//       const auf3 = this.value.auf.substr(8, 2); // 10
//       this.aufFormat = auf1 + ' / ' + auf2 + ' / ' + auf3;
//     } else {
//       this.aufFormat = this.value.auf;
//     }

//     // Czas --------------------------------------------------------------------
//     this.czas = this.value.czas * this.value.ilosc / 60;
//   }
//   // ************************************************************}
// }
