import { Edition } from './edition';
import { Organization } from './organization';

export interface Otherinoutcomes {
  edition: Edition;
  type: string;
  date: Date;
  from: Organization;
  to: Organization;
  concept: string;
  total_bt: number; /*Total Before Taxes*/
  taxes: number;
  outcome: boolean;
}
