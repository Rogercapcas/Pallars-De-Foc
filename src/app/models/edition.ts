import {User} from './user';

export class Edition {
  public year: number;
  public name: string;
  public generalManagers?: User[];
  public humanResources?: User[];
  public billsManager?: User[];
  public barManagers?: User[];
  public organizationsManager?: User[];

  constructor(
    year: number,
    name: string,
    generalManagers?: User[],
    humanResources?: User[],
    billsManager?: User[],
    barManagers?: User[],
    organizationsManager?: User[]
  ) {
    this.year = year;
    this.name = name;
    this.generalManagers = generalManagers;
    this.humanResources = humanResources;
    this.billsManager = billsManager;
    this.barManagers = barManagers;
    this.organizationsManager = organizationsManager;
  }
}
