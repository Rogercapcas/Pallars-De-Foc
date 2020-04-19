import { User } from './user';
import {Organization} from './organization';
import {Budget} from './budget';
import {Bill} from './bill';
import {Otherinoutcomes} from './other_in_out_comes';

export class Edition {
  public year: number;
  public name: string;
  public attendingOrganizations: Organization[];
  public budget: Budget;
  public bills: Bill[];
  public otherInOutcomes: Otherinoutcomes[];
  public generalManagers: User[];
  public humanResources: User[];
  public billsManager: User[];
  public barManagers: User[];
  public organizationsManager: User[];

  constructor(
    year: number,
    name: string,
  ) {
    this.year = year;
    this.name = name;
    this.attendingOrganizations = [];
    this.budget = new Budget();
    this.bills = [];
    this.otherInOutcomes = [];
    this.generalManagers = [];
    this.humanResources = [];
    this.billsManager = [];
    this.barManagers = [];
    this.organizationsManager = [];
  }
}
