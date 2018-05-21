import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreditCardsRoutingModule } from "./credit-cards-routing.module";
import { CreditCardsComponent } from "./components/credit-cards/credit-cards.component";
import { CreditCardFormComponent } from "./components/credit-card-form/credit-card-form.component";
import { DeletionDialogComponent } from "./components/deletion-dialog/deletion-dialog.component";
import {
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatDividerModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatTooltipModule,
  MatToolbarModule
} from "@angular/material";
import { CreateCreditCardComponent } from "./components/create-credit-card/create-credit-card.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    CreditCardsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    DeletionDialogComponent,
    CreditCardsComponent,
    CreditCardFormComponent,
    CreateCreditCardComponent
  ],
  entryComponents: [DeletionDialogComponent]
})
export class CreditCardsModule {}
