import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {
  budget: Budget;
  budgetForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
      pfGrants: ['', Validators.required],
      pfBills: ['', Validators.required],
      pfOthers: ['', Validators.required],
      pcCapital: ['', Validators.required],
      pcKind: ['', Validators.required],
      pcOthers: ['', Validators.required],
      sBar: ['', Validators.required],
      sMerchandising: ['', Validators.required],
      sTicketsQuotes: ['', Validators.required],
      sOthers: ['', Validators.required],
      ownFunds: ['', Validators.required],
      dPosters: ['', Validators.required],
      dDesign: ['', Validators.required],
      dDigitalMedia: ['', Validators.required],
      dTraditionalMedia: ['', Validators.required],
      dMerchandising: ['', Validators.required],
      dGiftsSouvenirsPrizes: ['', Validators.required],
      dWeb: ['', Validators.required],
      dOthers: ['', Validators.required],
      cServicesRecived: ['', Validators.required],
      cGoods: ['', Validators.required],
      cFoodDrinkSleep: ['', Validators.required],
      cTransport: ['', Validators.required],
      cOthers: ['', Validators.required],
      rInfraestructures: ['', Validators.required],
      rForniture: ['', Validators.required],
      rOthers: ['', Validators.required],
      hArtists: ['', Validators.required],
      hServices: ['', Validators.required],
      hLightSoundSystem: ['', Validators.required],
      hOthers: ['', Validators.required],
      bGoods: ['', Validators.required],
      bGlasses: ['', Validators.required],
      bForniture: ['', Validators.required],
      bTickets: ['', Validators.required],
      bOthers: ['', Validators.required],
      maGoods: ['', Validators.required],
      maInfraestructure: ['', Validators.required],
      maInsurance: ['', Validators.required],
      maFungible: ['', Validators.required],
      maOthers: ['', Validators.required],
      oInsurance: ['', Validators.required],
      oFungible: ['', Validators.required],
      oSponsorsMarketing: ['', Validators.required],
      oAccreditationsAndStaff: ['', Validators.required]

    });
  }
  get f() { return this.budgetForm.controls; }

  onSubmit() {
    console.log('It got into budget-edit onSubmit');
    if (this.budgetForm.invalid) {
      console.log('something wrong makes the form invalid');
      return; }
    this.submitted = true;

    if (this.budgetForm.invalid) {
      return;
    }

    console.warn(this.budgetForm.value);
    console.log('hola');
    console.log(this.budgetForm);
    console.log('Starting to fill the income attributes');
    this.budget.pfGrants = this.budgetForm.value.pfGrants;
    this.budget.pfBills = this.budgetForm.value.pfBills;
    this.budget.pfOthers = this.budgetForm.value.pfOthers;
    this.budget.pcCapital = this.budgetForm.value.pcCapital;
    this.budget.pcKind = this.budgetForm.value.pcKind;
    this.budget.pcOthers = this.budgetForm.value.pcOthers;
    this.budget.sBar = this.budgetForm.value.sBar;
    this.budget.sMerchandising = this.budgetForm.value.sMerchandising;
    this.budget.sTicketsQuotes = this.budgetForm.value.sTicketsQuotes;
    this.budget.sOthers = this.budgetForm.value.sOthers;
    this.budget.ownFunds = this.budgetForm.value.ownFunds;
    console.log('Income attributes filled');
    console.log('Starting to fill the outome attributes');
    this.budget.dPosters = this.budgetForm.value.dPosters;
    this.budget.dDesign = this.budgetForm.value.dDesign;
    this.budget.dDigitalMedia = this.budgetForm.value.dDigitalMedia;
    this.budget.dTraditionalMedia = this.budgetForm.value.dTraditionalMedia;
    this.budget.dMerchandising = this.budgetForm.value.dMerchandising;
    this.budget.dGiftsSouvenirsPrizes = this.budgetForm.value.dGiftsSouvenirsPrizes;
    this.budget.dWeb = this.budgetForm.value.dWeb;
    this.budget.dOthers = this.budgetForm.value.dOthers;
    this.budget.cServicesRecived = this.budgetForm.value.cServicesRecived;
    this.budget.cGoods = this.budgetForm.value.cGoods;
    this.budget.cFoodDrinkSleep = this.budgetForm.value.cFoodDrinkSleep;
    this.budget.cTransport = this.budgetForm.value.cTransport;
    this.budget.cOthers = this.budgetForm.value.cOthers;
    this.budget.rInfraestructures = this.budgetForm.value.rInfraestructures;
    this.budget.rForniture = this.budgetForm.value.rForniture;
    this.budget.rOthers = this.budgetForm.value.rOthers;
    this.budget.hArtists = this.budgetForm.value.hArtists;
    this.budget.hServices = this.budgetForm.value.hServices;
    this.budget.hLightSoundSystem = this.budgetForm.value.hLightSoundSystem;
    this.budget.hOthers = this.budgetForm.value.hOthers;
    this.budget.bGoods = this.budgetForm.value.bGoods;
    this.budget.bGlasses = this.budgetForm.value.bGlasses;
    this.budget.bForniture = this.budgetForm.value.bForniture;
    this.budget.bTickets = this.budgetForm.value.bTickets;
    this.budget.bOthers = this.budgetForm.value.bOthers;
    this.budget.maGoods = this.budgetForm.value.maGoods;
    this.budget.maInfraestructure = this.budgetForm.value.maInfraestructure;
    this.budget.maInsurance = this.budgetForm.value.maInsurance;
    this.budget.maFungible = this.budgetForm.value.maFungible;
    this.budget.maOthers = this.budgetForm.value.maOthers;
    this.budget.oInsurance = this.budgetForm.value.oInsurance;
    this.budget.oFungible = this.budgetForm.value.oFungible;
    this.budget.oSponsorsMarketing = this.budgetForm.value.oSponsorsMarketing;
    this.budget.oAccreditationsAndStaff = this.budgetForm.value.oAccreditationsAndStaff;
    console.log('Outcome attributes filled');
  }

}
