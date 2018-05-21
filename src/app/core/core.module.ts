import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreditCardsService } from "./services";
import { NgxsModule } from "@ngxs/store";
import { CreditCardsState } from "./store/state/credit-cards.state";
import { CreditCardTypesState } from "./store/state/credit-card-types.state";
import { environment } from "../../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([CreditCardsState, CreditCardTypesState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [CreditCardsService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
