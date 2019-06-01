import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Czas } from './model';
@Injectable()
export class CzasService {
  czasyCollectionRef: AngularFirestoreCollection<Czas>;
  czasy$: Observable<Czas[]>;
  hours: number;
  result: number;
  constructor(private afs: AngularFirestore) {
    const hours = 8;
    const result: number = Date.now() - hours * 3600000;

    this.czasyCollectionRef = this.afs.collection<Czas>('czasy', ref =>
      // ref.orderBy('createdAt').startAt(result)
      ref.where('createdAt', '>', result).orderBy('createdAt', 'desc')
    );

    this.czasy$ = this.czasyCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Czas;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  add(data: Czas) {
    const createdAt = Date.now();
    const updatedAt = Date.now();
    this.czasyCollectionRef.add({ ...data, createdAt, updatedAt });
  }
  delete(id: string) {
    // this.czasDoc = this.afs.doc(`czasy/${id}`);
    // this.czasDoc.delete();
    this.czasyCollectionRef.doc(id).delete();
  }

  update(data: Czas) {
    this.czasyCollectionRef.doc(data.id).update({
      data
    });
    // this.czasDoc = this.afs.doc(`czasy/${data.id}`);
    // this.czasDoc.update(data);
  }
}
