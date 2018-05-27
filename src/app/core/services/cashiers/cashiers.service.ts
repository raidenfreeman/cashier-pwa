import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cashier } from '../../model/cashier';

const cashiersCollectionSelector: string = "cashiers";

@Injectable({
  providedIn: 'root'
})
export class CashiersService {

  private cashiersCollection: AngularFirestoreCollection<Cashier>;
  constructor(private db: AngularFirestore) {
    this.cashiersCollection = this.db.collection<Cashier>(
      cashiersCollectionSelector
    );
  }

  getCashiers(): Observable<Cashier[]> {
    return this.cashiersCollection.snapshotChanges().pipe(
      map(changeActions =>
        changeActions.map(action => {
          const data = action.payload.doc.data() as Cashier;
          const id = action.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  createCashier(cashier: Cashier) {
    const newCashier = this.removeId(cashier);
    return from(this.cashiersCollection.add(newCashier));
  }
  updateCashier(cashier: Cashier) {
    return from(this.cashiersCollection.doc(cashier.id).update(cashier));
  }
  deleteCashier(cashierId: string) {
    return from(this.cashiersCollection.doc(cashierId).delete());
  }
  private removeId(o: any): any {
    const { id, ...objectWithoutId } = o;
    return objectWithoutId;
  }
}
