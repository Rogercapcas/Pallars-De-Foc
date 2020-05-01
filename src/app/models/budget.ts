import { Edition } from './edition';
import {getLocaleDateFormat} from '@angular/common';
import {Validators} from '@angular/forms';

export class Budget {
  public totalAmount = 0.0;
  public creationDate: Date;
  public modificationDate: Date;
  public INCOMES: number;
  public OUTCOMES: number;
  // INCOMES
  // Group 1: public founds (pf)
  public pf: number;
  public pfGrants: number;
  public pfBills: number;
  public pfOthers: number;

  // Group 2: private contributions (pc)
  public pc: number;
  public pcCapital: number;
  public pcKind: number; // en espècies
  public pcOthers: number;

  // Group 3: sells (s)
  public s: number;
  public sBar: number;
  public sMerchandising: number;
  public sTicketsQuotes: number;
  public sOthers: number;

  // Group 4: own funds
  public ownFunds: number;

  // OUTCOMES
  // Group 5: difusió (d)
  public d: number;
  public dPosters: number;
  public dDesign: number;
  public dDigitalMedia: number;
  public dTraditionalMedia: number;
  public dMerchandising: number;
  public dGiftsSouvenirsPrizes: number;
  public dWeb: number;
  public dOthers: number;

  // Group 6: Compensations (c)
  public c: number;
  public cServicesRecived: number;
  public cGoods: number;
  public cFoodDrinkSleep: number;
  public cTransport: number;
  public cOthers: number;

  // Group 7: Rentals (r)
  public r: number;
  public rInfraestructures: number;
  public rForniture: number;
  public rOthers: number;

  // Group 8: Hiring (h) ==> Contractacions
  public h: number;
  public hArtists: number;
  public hServices: number;
  public hLightSoundSystem: number;
  public hOthers: number;

  // Group 9: Bar service (b)
  public b: number;
  public bGoods: number; // Tot el que sigui consumible
  public bGlasses: number; // gots
  public bForniture: number;
  public bTickets: number;
  public bOthers: number;

  // Group 10: Main activity (ma)
  public ma: number;
  public maGoods: number; // Piro, pólvora, etc...
  public maInfraestructure: number; // Masses, paraigües, etc...
  public maInsurance: number;
  public maFungible: number;
  public maOthers: number;

  // Group 11: Others (o)
  public o: number;
  public oInsurance: number;
  public oFungible: number;
  public oSponsorsMarketing: number; // cartells patrocinadors
  public oAccreditationsAndStaff: number; // Acreditacions, samarretes, liners, etc... per la organització i convidats

  public comments?: string;

  constructor() {
    this.creationDate = new Date();
    this.modificationDate = new Date();
    this.comments = '';
    this.pf = 0.0;
    this.pfGrants = 0;
    this.pfBills = 0;
    this.pfOthers = 0;
    this.pc = 0;
    this.pcCapital = 0;
    this.pcKind = 0;
    this.pcOthers = 0;
    this.s = 0;
    this.sBar = 0;
    this.sMerchandising = 0;
    this.sTicketsQuotes = 0;
    this.sOthers = 0;
    this.ownFunds = 0;
    this.d = 0;
    this.dPosters = 0;
    this.dDesign = 0;
    this.dDigitalMedia = 0;
    this.dTraditionalMedia = 0;
    this.dMerchandising = 0;
    this.dGiftsSouvenirsPrizes = 0;
    this.dWeb = 0;
    this.dOthers = 0;
    this.c = 0;
    this.cServicesRecived = 0;
    this.cGoods = 0;
    this.cFoodDrinkSleep = 0;
    this.cTransport = 0;
    this.cOthers = 0;
    this.r = 0;
    this.rInfraestructures = 0;
    this.rForniture = 0;
    this.rOthers = 0;
    this.h = 0;
    this.hArtists = 0;
    this.hServices = 0;
    this.hLightSoundSystem = 0;
    this.hOthers = 0;
    this.b = 0;
    this.bGoods = 0;
    this.bGlasses = 0;
    this.bForniture = 0;
    this.bTickets = 0;
    this.bOthers = 0;
    this.ma = 0;
    this.maGoods = 0;
    this.maInfraestructure = 0;
    this.maInsurance = 0;
    this.maFungible = 0;
    this.maOthers = 0;
    this.o = 0;
    this.oInsurance = 0;
    this.oFungible = 0;
    this.oSponsorsMarketing = 0;
    this.oAccreditationsAndStaff = 0;
    this.setTotals();
  }

  setConcepts(pfGrants: number,
              pfBills: number,
              pfOthers: number,
              pcCapital: number,
              pcKind: number,
              pcOthers: number,
              sBar: number,
              sMerchandising: number,
              sTicketsQuotes: number,
              sOthers: number,
              ownFunds: number,
              dPosters: number,
              dDesign: number,
              dDigitalMedia: number,
              dTraditionalMedia: number,
              dMerchandising: number,
              dGiftsSouvenirsPrizes: number,
              dWeb: number,
              dOthers: number,
              cServicesRecived: number,
              cGoods: number,
              cFoodDrinkSleep: number,
              cTransport: number,
              cOthers: number,
              rInfraestructures: number,
              rForniture: number,
              rOthers: number,
              hArtists: number,
              hServices: number,
              hLightSoundSystem: number,
              hOthers: number,
              bGoods: number,
              bGlasses: number,
              bForniture: number,
              bTickets: number,
              bOthers: number,
              maGoods: number,
              maInfraestructure: number,
              maInsurance: number,
              maFungible: number,
              maOthers: number,
              oInsurance: number,
              oFungible: number,
              oSponsorsMarketing: number,
              oAccreditationsAndStaff: number ) {
    this.pfGrants = pfGrants;
    this.pfBills = pfBills;
    this.pfOthers = pfOthers;
    this.pcCapital = pcCapital;
    this.pcKind = pcKind;
    this.pcOthers = pcOthers;
    this.sBar = sBar;
    this.sMerchandising = sMerchandising;
    this.sTicketsQuotes = sTicketsQuotes;
    this.sOthers = sOthers;
    this.ownFunds = ownFunds;
    this.dPosters = dPosters;
    this.dDesign = dDesign;
    this.dDigitalMedia = dDigitalMedia;
    this.dTraditionalMedia = dTraditionalMedia;
    this.dMerchandising = dMerchandising;
    this.dGiftsSouvenirsPrizes = dGiftsSouvenirsPrizes;
    this.dWeb = dWeb;
    this.dOthers = dOthers;
    this.cServicesRecived = cServicesRecived;
    this.cGoods = cGoods;
    this.cFoodDrinkSleep = cFoodDrinkSleep;
    this.cTransport = cTransport;
    this.cOthers = cOthers;
    this.rInfraestructures = rInfraestructures;
    this.rForniture = rForniture;
    this.rOthers = rOthers;
    this.hArtists = hArtists;
    this.hServices = hServices;
    this.hLightSoundSystem = hLightSoundSystem;
    this.hOthers = hOthers;
    this.bGoods = bGoods;
    this.bGlasses = bGlasses;
    this.bForniture = bForniture;
    this.bTickets = bTickets;
    this.bOthers = bOthers;
    this.maGoods = maGoods;
    this.maInfraestructure = maInfraestructure;
    this.maInsurance = maInsurance;
    this.maFungible = maFungible;
    this.maOthers = maOthers;
    this.oInsurance = oInsurance;
    this.oFungible = oFungible;
    this.oSponsorsMarketing = oSponsorsMarketing;
    this.oAccreditationsAndStaff = oAccreditationsAndStaff;
    this.setTotals();
  }

  setTotals() {
    // Totals
    // Group 1: public founds (pf)
    this.pf = this.pfGrants + this.pfBills + this.pfOthers;
    // Group 2: private contributions (pc)
    this.pc = this.pcCapital + this.pcKind + this.pcOthers;
    // Group 3: sells (s)
    this.s = this.sBar + this.sMerchandising + this.sTicketsQuotes + this.sOthers;
    // ttal incomes
    this.INCOMES = this.pf + this.pc + this.s + this.ownFunds;
    // OUTCOMES
    // Group 5: difusió (d)
    this.d = this.dPosters + this.dDigitalMedia + this.dDesign + this.dTraditionalMedia + this.dMerchandising + this.dGiftsSouvenirsPrizes + this.dWeb + this.dOthers;
    // Group 6: Compensations (c)
    this.c = this.cServicesRecived + this.cGoods + this.cFoodDrinkSleep + this.cTransport + this.cOthers;
    // Group 7: Rentals (r)
    this.r = this.rInfraestructures + this.rForniture + this.rOthers;
    // Group 8: Hiring (h) ==> Contractacions
    this.h = this.hArtists + this.hServices + this.hLightSoundSystem + this.hOthers;
    // Group 9: Bar service (b)
    this.b = this.bGoods + this.bGlasses + this.bForniture + this.bTickets + this.bOthers;
    // Group 10: Main activity (ma)
    this.ma = this.maOthers + this.maGoods + this.maInfraestructure + this.maInsurance + this.maFungible;
    // Group 11: Others (o)
    this.o = this.oInsurance + this.oFungible + this.oSponsorsMarketing + this.oAccreditationsAndStaff;
    this.modificationDate = new Date();
    // ttal outcomes
    this.OUTCOMES = this.d + this.c + this.r + this.h + this.b + this.ma + this.o;
    this.totalAmount = this.INCOMES - this.OUTCOMES;
  }
}
