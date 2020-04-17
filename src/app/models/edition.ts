import { User } from './user';
import {Organization} from './organization';

export class Edition {
  public year: number;
  public name: string;
  public validated: boolean;
  public attendingOrganizations?: Organization[];
  public generalManagers?: User[];
  public humanResources?: User[];
  public billsManager?: User[];
  public barManagers?: User[];
  public organizationsManager?: User[];

  constructor(
    year: number,
    name: string,
  ) {
    this.year = year;
    this.name = name;
    this.validated = false;
  }
}
