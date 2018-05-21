import { map } from "rxjs/operators";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { CreditCard, CreditCardType } from "../../model";

const creditCardTypesCollection: string = "creditCardTypes";
const creditCardsCollection: string = "creditCards";
@Injectable({
  providedIn: "root"
})
export class CreditCardsService {
  private cardTypesCollection: AngularFirestoreCollection<CreditCardType>;
  private cardsCollection: AngularFirestoreCollection<CreditCard>;
  constructor(private db: AngularFirestore) {
    this.cardTypesCollection = this.db.collection<CreditCardType>(
      creditCardTypesCollection
    );
    this.cardsCollection = this.db.collection<CreditCard>(
      creditCardsCollection
    );
  }

  getCreditCards(): Observable<CreditCard[]> {
    return this.cardsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(action => {
          const data = action.payload.doc.data() as CreditCard;
          const id = action.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  getCreditCardTypes(): Observable<CreditCardType[]> {
    return this.cardTypesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(action => {
          const data = action.payload.doc.data() as CreditCardType;
          const id = action.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  createCreditCard(card: CreditCard) {
    const newCard = this.removeId(card);
    return from(this.cardsCollection.add(newCard));
  }
  updateCreditCard(card: CreditCard) {
    return from(this.cardsCollection.doc(card.id).update(card));
    // .then(success);
  }
  deleteCreditCard(cardId: string) {
    return from(this.cardsCollection.doc(cardId).delete());
  }
  private removeId(o: any): any {
    const { id, ...objectWithoutId } = o;
    return objectWithoutId;
  }
}
