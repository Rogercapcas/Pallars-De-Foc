import { Organization } from './organization';
import { Edition } from './edition';

export interface Bill {
  bill_number: number;
  edition: Edition;
  date: Date;
  from: Organization;
  to: Organization;
  concept: string;
  total_bt: number; /*Total Before Taxes*/
  taxes: number;
  income: boolean;
  comments: string;
}
