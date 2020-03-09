import { Edition } from './models/edition';
import { USERS } from './users-set';

export const EDITIONS: Edition[] = [
  new Edition(2019, 'IV', [USERS[2]], [USERS[0]], [USERS[1], USERS[2]], [USERS[1]]),
  new Edition(2020, 'V', [USERS[2]], [USERS[0]], [USERS[1], USERS[2]], [USERS[1]]),
  new Edition(2021, 'VI', [USERS[2]], [USERS[0]], [USERS[1], USERS[2]], [USERS[1]])
];
