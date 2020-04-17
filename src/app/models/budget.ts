import { Edition } from './edition';
import {getLocaleDateFormat} from '@angular/common';

export class Budget {
  public edition: Edition;
  public totalAmount = 0.0;
  public creationDate: Date;
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
  public cGivenServices: number;
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
  public maEnsurance: number;
  public maFungible: number;
  public maOthers: number;

  // Group 11: Others (o)
  public oEnsurance: number;
  public oFungible: number;
  public oSponsorsMarketing: number; // cartells patrocinadors
  public oAccreditationsAndStuff: number; // Acreditacions, samarretes, liners, etc... per la organització i convidats

  public comments?: string;

  constructor(edition: Edition, date: Date) {
    this.edition = edition;
    this.creationDate = date;
  }
}
