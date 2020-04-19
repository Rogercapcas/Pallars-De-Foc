import { Edition } from './edition';
import {getLocaleDateFormat} from '@angular/common';
import {Validators} from '@angular/forms';

export class Budget {
  public edition: Edition;
  public totalAmount = 0.0;
  public creationDate: string;
  // INCOMES
  // Group 1: public founds (pf)
  public pfGrants: number;
  public pfBills: number;
  public pfOthers: number;

  // Group 2: private contributions (pc)
  public pcCapital: number;
  public pcKind: number; // en espècies
  public pcOthers: number;

  // Group 3: sells (s)
  public sBar: number;
  public sMerchandising: number;
  public sTicketsQuotes: number;
  public sOthers: number;

  // Group 4: own funds
  public ownFunds: number;

  // OUTCOMES
  // Group 5: difusió (d)
  public dPosters: number;
  public dDesign: number;
  public dDigitalMedia: number;
  public dTraditionalMedia: number;
  public dMerchandising: number;
  public dGiftsSouvenirsPrizes: number;
  public dWeb: number;
  public dOthers: number;

  // Group 6: Compensations (c)
  public cServicesRecived: number;
  public cGoods: number;
  public cFoodDrinkSleep: number;
  public cTransport: number;
  public cOthers: number;

  // Group 7: Rentals (r)
  public rInfraestructures: number;
  public rForniture: number;
  public rOthers: number;

  // Group 8: Hiring (h) ==> Contractacions
  public hArtists: number;
  public hServices: number;
  public hLightSoundSystem: number;
  public hOthers: number;

  // Group 9: Bar service (b)
  public bGoods: number; // Tot el que sigui consumible
  public bGlasses: number; // gots
  public bForniture: number;
  public bTickets: number;
  public bOthers: number;

  // Group 10: Main activity (ma)
  public maGoods: number; // Piro, pólvora, etc...
  public maInfraestructure: number; // Masses, paraigües, etc...
  public maInsurance: number;
  public maFungible: number;
  public maOthers: number;

  // Group 11: Others (o)
  public oInsurance: number;
  public oFungible: number;
  public oSponsorsMarketing: number; // cartells patrocinadors
  public oAccreditationsAndStaff: number; // Acreditacions, samarretes, liners, etc... per la organització i convidats

  public comments?: string;

  constructor(edition: Edition, date: string, comments: string) {
    this.edition = edition;
    this.creationDate = date;
    this.comments = comments;
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
  }
}
