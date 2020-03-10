import { Edition } from './edition';
import { Organization } from './organization';

export class Otherinoutcomes {
  edition: Edition;
  type: string;
  date: Date;
  from: Organization;
  to: Organization;
  concept: string;
  budgetConcept: string;
  totalBT: number; /*Total Before Taxes*/
  taxes: number;
  income: boolean;
  comments: string;

  constructor(edition: Edition, type: string, date: Date, from: Organization, to: Organization, concept: string, budgetConcept:string, totalBT: number, taxes: number, income: boolean, comments: string) {
    this.edition = edition;
    this.type = type;
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
