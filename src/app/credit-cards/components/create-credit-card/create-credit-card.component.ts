import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { CreditCardType, CreditCard } from "../../../core/model";

const enum buttonStates {
  initial = "initial",
  activated = "activated"
}


@Component({
  selector: "app-create-credit-card",
  templateUrl: "./create-credit-card.component.html",
  styleUrls: ["./create-credit-card.component.scss"],
  animations: [
    trigger("btnState", [
      state(
        "initial",
        style({
          backgroundColor: "#c2185b",
          height: "4em",
          width: "4em",
          borderRadius: "50%"
        })
      ),
      state(
        "activated",
        style({
          backgroundColor: "#424242",
          height: "30em",
          width: "27em",
          borderRadius: "0 2em 0 2em"
        })
      ),
      transition("initial => activated", animate("400ms ease-in")),
      transition("activated => initial", animate("400ms ease-out"))
    ])
  ]
})
export class CreateCreditCardComponent implements OnInit {

  @Input() cardTypes: CreditCardType[];
  newCard = new CreditCard();
  buttonState = buttonStates.initial;
  showButton: boolean = true;

  constructor() {}

  ngOnInit() {}

  addCard() {
    this.buttonState = this.invertState(this.buttonState);
  }

  handleCancel() {
    this.showButton = true;
    this.buttonState = buttonStates.initial;
  }
  invertState(state: buttonStates) {
    if (state === buttonStates.initial) {
      return buttonStates.activated;
    } else {
      return buttonStates.initial;
    }
  }
  animationDone($event) {
    if (this.buttonState == buttonStates.activated) {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
  }
}
