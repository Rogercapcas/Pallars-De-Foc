import { Organization } from './organization';
import { Edition } from './edition';

export interface Bill {
  edition: Edition;
  date: Date;
  from: Organization;
  to: Organization;
  concept: string;
  total_bt: number; /*Total Before Taxes*/
  taxes: number;
  outcome: boolean;
}
