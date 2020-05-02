import { Bill } from '../models/bill';
import {Organization} from '../models/organization';
export const o1 = new Organization('111111111', 'Colla de Diables Lo Peirot de Tremp', 'Tremp', 'Catalunya', '25620', 'Carrer Alcalde Rossell', 8, 'pepito', 666666666, 'exemple@exemple.cat', 'Colla de diables');
export const o2 = new Organization('222222222', 'Prova - 1', 'Lleida', 'Catalunya', '25003', 'Ciutat de Fraga', 7, 'Pepito2', 677777777, 'exemple2@exemple.cat', 'Entitat pública');
export const BILLS: Bill[] = [
  new Bill(1, new Date(), o1, o2, 'prova factura 1', 'concepte budget A', 100, 0.21, true, false, 'comments'),
  new Bill(2, new Date(), o1, o2, 'prova factura 2', 'concepte budget B', 10, 0.021, true, false, 'comments'),
  new Bill(3, new Date(), o2, o1, 'prova factura 3', 'concepte budget C', 100, 0.21, false, false, 'comments'),
  new Bill(4, new Date(), o1, o2, 'prova factura 4', 'concepte budget D', 10, 0.021, true, false, 'comments'),
  new Bill(5, new Date(), o1, o2, 'prova factura 5', 'concepte budget E', 100, 0.21, true, true, 'comments'),
  new Bill(6, new Date(), o1, o2, 'prova factura 6', 'concepte budget F', 10, 0.021, false, false, 'comments'),
  new Bill(7, new Date(), o1, o2, 'prova factura 7', 'concepte budget G', 100, 0.21, false, true, 'comments'),
  new Bill(8, new Date(), o1, o2, 'prova factura 8', 'concepte budget H', 10, 0.021, true, false, 'comments')
];
