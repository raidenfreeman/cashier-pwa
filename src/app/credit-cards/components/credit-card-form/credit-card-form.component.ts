import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes
} from "@angular/animations";
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { CreditCard, CreditCardType } from "../../../core/model";
import { Store, Actions, ofActionSuccessful } from "@ngxs/store";
import {
  UpdateCard,
  CreateCard,
  DeleteCard
} from "../../../core/store/actions/credit-cards.actions";
import { DeletionDialogComponent } from "../deletion-dialog/deletion-dialog.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-credit-card-form",
  templateUrl: "./credit-card-form.component.html",
  styleUrls: ["./credit-card-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(0)" })),
      state("out", style({ transform: "translateX(-100%)" })),
      transition("in => out", [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: "translateX(0)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(10%)", offset: 0.7 }),
            style({ opacity: 0, transform: "translateX(-100%)", offset: 1.0 })
          ])
        )
      ]),
      transition("out => in", [
        animate(
          300,
          keyframes([
            style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
            style({ opacity: 1, transform: "translateX(10%)", offset: 0.3 }),
            style({ opacity: 1, transform: "translateX(0)", offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class CreditCardFormComponent implements OnInit {
  @Input() card: CreditCard;
  @Input() edit: boolean;
  @Input() cardTypes: CreditCardType[];
  @Output() onCancel = new EventEmitter();
  creditCardForm: FormGroup;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private actions$: Actions
  ) {}

  ngOnInit() {
    this.creditCardForm = this.buildForm(this.formBuilder, this.card);
    if (!this.edit) {
      this.actions$.pipe(ofActionSuccessful(CreateCard)).subscribe(() => {
        this.cancel();
      });
    }
  }

  onSubmit() {
    if (this.creditCardForm.invalid) {
      return;
    }
    if (this.edit && this.creditCardForm.value.id) {
      this.store.dispatch(new UpdateCard(this.creditCardForm.value));
      // this.creditCardForm.valueChanges
      // this.service.updateCreditCard(this.creditCardForm.value, () =>
      //   this.cancel()
      // );
      // this.store.dispatch(new UpdateCard(this.creditCardForm.value));
    } else {
      this.store.dispatch(new CreateCard(this.creditCardForm.value));
      // this.service.createCreditCard(this.creditCardForm.value, () =>
      //   this.cancel()
      // );
      // this.store.dispatch(new CreateCard(this.creditCardForm.value));
    }
  }
  cancel() {
    if (this.edit) {
      return;
    }
    this.onCancel.emit();
  }

  delete() {
    if (!this.edit) {
      // this.cancel();
      return;
    }
    let dialogRef = this.dialog.open(DeletionDialogComponent, {
      data: { name: this.creditCardForm.value.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true && this.card.id) {
        this.store.dispatch(new DeleteCard(this.card.id));
        // this.service.deleteCreditCard(this.card.id);
      }
    });
  }

  buildForm(fb: FormBuilder, card: CreditCard) {
    return fb.group({
      id: [card.id],
      name: [card.name, Validators.required],
      description: card.description,
      issuingOrganization: card.issuingOrganization,
      commissionPercentage: [card.commissionPercentage, Validators.required],
      commissionFixed: [card.commissionFixed, Validators.required],
      type: [card.type, Validators.required]
    });
  }
}
