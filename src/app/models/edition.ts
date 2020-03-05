import {User} from './user';

export interface Edition {
  year: number;
  name: string;
  general_managers: User[];
  human_resources: User[];
  bills_manager: User[];
  bar_managers: User[];
  organizations_manager: User[];
}
