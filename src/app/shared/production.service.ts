import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
// import * as firebase from 'firebase/app';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Production } from './model';

@Injectable()
export class ProductionService {
  productionsCollectionRef: AngularFirestoreCollection<Production>;
  productions$: Observable<Production[]>;
  hours: number;
  result: number;

  private sumSztuk = 0;
  private sumMinut = 0;
  private sumWaga = 0;
  private sum = new Subject<number>();

  constructor(private afs: AngularFirestore) {
    const hours = 80;
    const result: number = Date.now() - hours * 3600000;

    this.productionsCollectionRef = this.afs.collection<Production>(
      'productions',
      ref =>
        // ref.orderBy('createdAt').startAt(result)
        ref.where('dateNow', '>', result).orderBy('dateNow', 'desc')
    );

    this.productions$ = this.productionsCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Production;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    console.log('production$: ', this.productions$);
  }

  // getProductions() {
  //   this.afs.collection<Production>('productions', ref =>
  //     // ref.orderBy('createdAt').startAt(result)
  //     ref.orderBy('dateNow', 'desc')
  //   );

  //   this.production$ = this.productionCollectionRef
  //     .snapshotChanges()
  //     .map(actions => {
  //       return actions.map(action => {
  //         const data = action.payload.doc.data() as Production;
  //         const id = action.payload.doc.id;
  //         return { id, ...data };
  //       });
  //     });
  // }

  add(data: Production) {
    const dateNow = Date.now();
    const dataTemp = data;
    dataTemp.dateNow = dateNow;
    // const data.dateNow = Date.now();
    const updatedAt = Date.now();
    this.productionsCollectionRef.add({ ...data, dateNow });
  }
  delete(id: string) {
    // this.ProductionDoc = this.afs.doc(`Productiony/${id}`);
    // this.ProductionDoc.delete();
    this.productionsCollectionRef.doc(id).delete();
  }

  update(data: Production) {
    this.productionsCollectionRef.doc(data.id).update({
      data
    });
    // this.ProductionDoc = this.afs.doc(`Productiony/${data.id}`);
    // this.ProductionDoc.update(data);
  }

  savePozycjaAdd(data): any {
    const promise1 = new Promise((resolve, reject) => {
      // this.getWagi().forEach(arr1 => {
      //   arr1.forEach(element => {
      //     if (element.wll === data.wll && element.l1 === data.l1) {
      //       const elWaga = element.waga;
      //       resolve(elWaga);
      //     }
      //   }); // foreach
      // }); // get wagi
    }); // promise new

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(0);
      }, 1000);
    });

    Promise.race([promise1, promise2]).then(wygral => {
      console.log('wygral ', wygral);
      console.log('  Promise.race data ', data);
      const m = this.setLicznik(data);

      const aufFormat = this.aufFormat(data);

      if (wygral > 0) {
        this.productionsCollectionRef.add({
          ...data,
          waga: wygral,
          m: m
        });

        // this.afd.list('/listaPozycji').push({
        //   wll: data.wll,
        //   l1: data.l1,
        //   auf: data.auf,
        //   aufFormat: aufFormat,
        //   m: licz,
        //   nici: data.nici,
        //   ilosc: data.szt,
        //   Production: data.Production,
        //   note: '',
        //   fireTimestamp: firebase.database.ServerValue.TIMESTAMP,
        //   dateNow: Date.now(),
        //   waga: wygral
        // });
      } else {
        // this.afd.list('/listaPozycji').push({
        this.productionsCollectionRef.add({
          ...data,
          m: m,
          // fireTimestamp: this.afs.doc. .database.ServerValue.TIMESTAMP,
          dateNow: Date.now()
        });
      }
    });
  } // savepoz

  setLicznik(data) {
    const wll = data.wll;
    const l1 = data.l1;
    // od 1t do 4
    if (wll >= 1 && wll <= 4) {
      const licz = l1 * 1 * 22;
      return licz;
    } else {
    }
    // od 5t  do 8
    if (wll >= 5 && wll <= 8) {
      const licz = l1 * 1 * 20;
      return licz;
    } else {
      const licz = 0;
      return licz;
    }
  }

  aufFormat(data) {
    if (data.auf.length > 8) {
      // if (data.auf.length < 8) {
      //   if (data.auf.length > 9) {
      const auf0 = data.auf.substr(0, 3); // 777888;
      const auf1 = data.auf.substr(3, 3); // 777888;
      const auf2 = data.auf.substr(6, 2); // 01
      const auf3 = data.auf.substr(8, 2); // pozycja
      const aufFormat = auf0 + ' ' + auf1 + '/' + auf2 + '/' + auf3;
      return aufFormat;
      // }
    } else {
      return data.auf;
      // }
    }
  }

  getWagi() {
    // return this.afd.list('/listaWag');
    // return 1964;
  }

  addSztuk(sztuk) {
    this.sumSztuk += sztuk;
    this.sum.next(this.sumSztuk);
  }

  promisePozycje(hours) {
    const result: number = Date.now() - hours * 3600000;
    const promise = new Promise((resolve, reject) => {
      const items = this.productionsCollectionRef.snapshotChanges().pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as Production;
            const id = action.payload.doc.id;
            return { id, ...data };
          });
        })
      );
      console.log('production$: ', this.productions$);
      resolve(items);
    });
    return promise;
  }

  getTimes(wll, l1) {
    const promise = new Promise((resolve, reject) => {
      const times = this.productions$.pipe(map(array => array.reverse())).pipe(
        map(poKazdym =>
          poKazdym
            .filter(fi => fi.wll === wll)
            .filter(filt => filt.l1 === l1)
            .filter(ftr => ftr.czas !== 0)
        )
      );
      resolve(times);
    });
    return promise;
  }
}
