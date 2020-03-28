import { User } from './user';
import {Organization} from './organization';

export class Edition {
  public year: number;
  public name: string;
  public attendingOrganizations: Organization[];
  public generalManagers?: User[];
  public humanResources?: User[];
  public billsManager?: User[];
  public barManagers?: User[];
  public organizationsManager?: User[];

  constructor(
    year: number,
    name: string,
    attendingOrganizations: Organization[],
    generalManagers?: User[],
    humanResources?: User[],
    billsManager?: User[],
    barManagers?: User[],
    organizationsManager?: User[]
  ) {
    this.year = year;
    this.name = name;
    this.attendingOrganizations = attendingOrganizations;
    this.generalManagers = generalManagers;
    this.humanResources = humanResources;
    this.billsManager = billsManager;
    this.barManagers = barManagers;
    this.organizationsManager = organizationsManager;
  }
}
