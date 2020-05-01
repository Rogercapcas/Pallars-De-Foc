import {Component, Input, OnInit} from '@angular/core';
import { Budget } from '../../models/budget';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Edition} from '../../models/edition';
import validate = WebAssembly.validate;


@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {
  @Input() edition: Edition;
  budget: Budget;
  budgetForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.budget);
    this.budget = this.edition.budget;
    console.log(this.budget);
    this.budgetForm = this.fb.group({
      pfGrants: [this.edition.budget.pfGrants, Validators.required],
      pfBills: [this.edition.budget.pfBills, Validators.required],
      pfOthers: [this.edition.budget.pfOthers, Validators.required],
      pcCapital: [this.edition.budget.pcCapital, Validators.required],
      pcKind: [this.edition.budget.pcKind, Validators.required],
      pcOthers: [this.edition.budget.pcOthers, Validators.required],
      sBar: [this.edition.budget.sBar, Validators.required],
      sMerchandising: [this.edition.budget.sMerchandising, Validators.required],
      sTicketsQuotes: [this.edition.budget.sTicketsQuotes, Validators.required],
      sOthers: [this.edition.budget.sOthers, Validators.required],
      ownFunds: [this.edition.budget.ownFunds, Validators.required],
      dPosters: [this.edition.budget.dPosters, Validators.required],
      dDesign: [this.edition.budget.dDesign, Validators.required],
      dDigitalMedia: [this.edition.budget.dDigitalMedia, Validators.required],
      dTraditionalMedia: [this.edition.budget.dTraditionalMedia, Validators.required],
      dMerchandising: [this.edition.budget.dMerchandising, Validators.required],
      dGiftsSouvenirsPrizes: [this.edition.budget.dGiftsSouvenirsPrizes, Validators.required],
      dWeb: [this.edition.budget.dWeb, Validators.required],
      dOthers: [this.edition.budget.dOthers, Validators.required],
      cServicesRecived: [this.edition.budget.cServicesRecived, Validators.required],
      cGoods: [this.edition.budget.cGoods, Validators.required],
      cFoodDrinkSleep: [this.edition.budget.cFoodDrinkSleep, Validators.required],
      cTransport: [this.edition.budget.cTransport, Validators.required],
      cOthers: [this.edition.budget.cOthers, Validators.required],
      rInfraestructures: [this.edition.budget.rInfraestructures, Validators.required],
      rForniture: [this.edition.budget.rForniture, Validators.required],
      rOthers: [this.edition.budget.rOthers, Validators.required],
      hArtists: [this.edition.budget.hArtists, Validators.required],
      hServices: [this.edition.budget.hServices, Validators.required],
      hLightSoundSystem: [this.edition.budget.hLightSoundSystem, Validators.required],
      hOthers: [this.edition.budget.hOthers, Validators.required],
      bGoods: [this.edition.budget.bGoods, Validators.required],
      bGlasses: [this.edition.budget.bGlasses, Validators.required],
      bForniture: [this.edition.budget.bForniture, Validators.required],
      bTickets: [this.edition.budget.bTickets, Validators.required],
      bOthers: [this.edition.budget.bOthers, Validators.required],
      maGoods: [this.edition.budget.maGoods, Validators.required],
      maInfraestructure: [this.edition.budget.maInsurance, Validators.required],
      maInsurance: [this.edition.budget.maInsurance, Validators.required],
      maFungible: [this.edition.budget.maFungible, Validators.required],
      maOthers: [this.edition.budget.maOthers, Validators.required],
      oInsurance: [this.edition.budget.oInsurance, Validators.required],
      oFungible: [this.edition.budget.oFungible, Validators.required],
      oSponsorsMarketing: [this.edition.budget.oSponsorsMarketing, Validators.required],
      oAccreditationsAndStaff: [this.edition.budget.oAccreditationsAndStaff, Validators.required]

    });
  }
  // get f() { return this.budgetForm.controls; }

  onSubmit() {
    console.log('It got into budget-edit onSubmit');
    this.submitted = true;
    console.log('submitted value changed to True');

    console.log('Creating a budget');
    this.budget = this.edition.budget;
    if (this.budgetForm.invalid) {
      console.log('something wrong makes the form invalid');
      return; }

    if (this.budgetForm.invalid) {
      return;
    }

    // console.warn(this.budgetForm.value);
    console.log('hola');
    // console.log(this.budgetForm);
    console.log('Starting to fill the income attributes');
    this.edition.budget.setConcepts(this.budgetForm.value.pfGrants,
      this.budgetForm.value.pfBills,
      this.budgetForm.value.pfOthers,
      this.budgetForm.value.pcCapital,
      this.budgetForm.value.pcKind,
      this.budgetForm.value.pcOthers,
      this.budgetForm.value.sBar,
      this.budgetForm.value.sMerchandising,
      this.budgetForm.value.sTicketsQuotes,
      this.budgetForm.value.sOthers,
      this.budgetForm.value.ownFunds,
      this.budgetForm.value.dPosters,
      this.budgetForm.value.dDesign,
      this.budgetForm.value.dDigitalMedia,
      this.budgetForm.value.dTraditionalMedia,
      this.budgetForm.value.dMerchandising,
      this.budgetForm.value.dGiftsSouvenirsPrizes,
      this.budgetForm.value.dWeb,
      this.budgetForm.value.dOthers,
      this.budgetForm.value.cServicesRecived,
      this.budgetForm.value.cGoods,
      this.budgetForm.value.cFoodDrinkSleep,
      this.budgetForm.value.cTransport,
      this.budgetForm.value.cOthers,
      this.budgetForm.value.rInfraestructures,
      this.budgetForm.value.rForniture,
      this.budgetForm.value.rOthers,
      this.budgetForm.value.hArtists,
      this.budgetForm.value.hServices,
      this.budgetForm.value.hLightSoundSystem,
      this.budgetForm.value.hOthers,
      this.budgetForm.value.bGoods,
      this.budgetForm.value.bGlasses,
      this.budgetForm.value.bForniture,
      this.budgetForm.value.bTickets,
      this.budgetForm.value.bOthers,
      this.budgetForm.value.maGoods,
      this.budgetForm.value.maInfraestructure,
      this.budgetForm.value.maInsurance,
      this.budgetForm.value.maFungible,
      this.budgetForm.value.maOthers,
      this.budgetForm.value.oInsurance,
      this.budgetForm.value.oFungible,
      this.budgetForm.value.oSponsorsMarketing,
      this.budgetForm.value.oAccreditationsAndStaff);
    console.log('Outcome attributes filled');
  }

}
