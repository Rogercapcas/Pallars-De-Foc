import { Edition } from './edition';

export class Budget {
  name: string;
  edition: Edition;
  concepts: [boolean, string, number][]; /* [income, concept, ammount in €] */
  totalAmmount: number;
  comments: string;
  aproved: boolean;

  constructor(name: string, edition: Edition, concepts: [boolean, string, number][], totalAmmount: number, comments: string, aproved: boolean ) {
    this.name = name;
    this.edition = edition;
    this.concepts = concepts;
    this.totalAmmount = totalAmmount;
    this.comments = comments;
    this.aproved = aproved;
  }
}
