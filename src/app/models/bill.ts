import { Organization } from './organization';
import { Edition } from './edition';

export class Bill {
  billNumber: number;
  edition: Edition;
  date: Date;
  from: Organization;
  to: Organization;
  concept: string;
  totalBT: number; /*Total Before Taxes*/
  taxes: number;
  income: boolean;
  comments: string;

  constructor(billNumber: number, edition: Edition, date: Date, from: Organization, to: Organization, concept: string, totalBT: number, taxes: number, income: boolean, comments: string) {
    this.billNumber = billNumber;
    this.edition = edition;
    this.date = date;
    this.from = from;
    this.to = to;
    this.concept = concept;
    this.totalBT = totalBT;
    this.taxes = taxes;
    this.income = income;
    this.comments = comments;
  }
}
