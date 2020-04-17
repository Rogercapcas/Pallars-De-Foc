import { Organization } from './organization';
import { Edition } from './edition';

export class Bill {
  public billNumber: number;
  public edition: Edition;
  public date: Date;
  public from: Organization;
  public to: Organization;
  public concept: string;
  public budgetConcept: string;
  public totalBT: number; /*Total Before Taxes*/
  public taxes: number;
  public income: boolean; /* if its value is true means income, when its value is false means outcome*/
  public comments?: string;

  constructor(billNumber: number, edition: Edition, date: Date, from: Organization, to: Organization, concept: string, budgetConcept: string, totalBT: number, taxes: number, income: boolean, comments: string) {
    this.billNumber = billNumber;
    this.edition = edition;
    this.date = date;
    this.from = from;
    this.to = to;
    this.concept = concept;
    this.budgetConcept = budgetConcept;
    this.totalBT = totalBT;
    this.taxes = taxes;
    this.income = income;
    this.comments = comments;
  }
}
