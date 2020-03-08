import { Edition } from './edition';

export interface Budget {
  name: string;
  edition: Edition;
  concepts: [boolean, string, number][]; /* [income, concept, ammount in €] */
  total_ammount: number;
  comments: string;
}
