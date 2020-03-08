import { Edition } from './models/edition';
import { USERS } from './users-set';

export let EDITIONS: Edition[];
EDITIONS = [
  {
    year: 2019,
    name: 'IV',
    bar_managers: [USERS[1]],
    bills_manager: [USERS[1], USERS[2]],
    general_managers: [USERS[2]],
    human_resources: [USERS[0]],
    organizations_manager: []
  },
  {
    year: 2020,
    name: 'V',
    bar_managers: [USERS[1]],
    bills_manager: [USERS[1], USERS[2]],
    general_managers: [USERS[1]],
    human_resources: [USERS[0]],
    organizations_manager: []
  },
  {year: 2021,
    name: 'VI',
    bar_managers: [USERS[1]],
    bills_manager: [USERS[1], USERS[2]],
    general_managers: [USERS[1]],
    human_resources: [USERS[0]],
    organizations_manager: []},
];
