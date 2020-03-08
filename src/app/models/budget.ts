import { Edition } from './edition';

export interface Budget {
  name: string;
  edition: Edition;
  income_concepts: [string, number][];
  outcome_concepts: [string, number][];
  total_ammount: number;
}
