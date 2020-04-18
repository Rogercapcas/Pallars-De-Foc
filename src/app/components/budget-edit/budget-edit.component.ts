import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {
  budged: Budget;
  budgetForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
      pfGrants: [''],
      pfBills: [''],
      pfOthers: [''],
      pcCapital: [''],
      pcKind: [''],
      pcOthers: [''],
      sBar: [''],
      sMerchandising: [''],
      sTicketsQuotes: [''],
      sOthers: [''],
      ownFunds: [''],
      dPosters: [''],
      dDesign: [''],
      dDigitalMedia: [''],
      dTraditionalMedia: [''],
      dMerchandising: [''],
      dGiftsSouvenirsPrizes: [''],
      dWeb: [''],
      dOthers: [''],
      cServicesRecived: [''],
      cGoods: [''],
      cFoodDrinkSleep: [''],
      cTransport: [''],
      cOthers: [''],
      rInfraestructures: [''],
      rForniture: [''],
      rOthers: [''],
      hArtists: [''],
      hServices: [''],
      hLightSoundSystem: [''],
      hOthers: [''],
      bGoods: [''],
      bGlasses: [''],
      bForniture: [''],
      bTickets: [''],
      bOthers: [''],
      maGoods: [''],
      maInfraestructure: [''],
      maInsurance: [''],
      maFungible: [''],
      maOthers: [''],
      oInsurance: [''],
      oFungible: [''],
      oSponsorsMarketing: [''],
      oAccreditationsAndStaff: ['']

    });
  }
  get f() { return this.budgetForm.controls; }

  OnSubmint() {
    this.submitted = true;

    if (this.budgetForm.invalid) {
      return;
    }

    // console.warn(this.billForm.value);
    console.log('hola');
    console.log(this.budgetForm);
  }

}
