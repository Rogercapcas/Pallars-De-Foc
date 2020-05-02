import { Edition } from '../models/edition';
import {BILLS} from './bills-set';

export const EDITIONS: Edition[] = [
  new Edition(2019, 'IV'),
  new Edition(2020, 'V'),
  new Edition(2021, 'VI')
];

export function f(edition: Edition) {
  EDITIONS.push(edition);

}
