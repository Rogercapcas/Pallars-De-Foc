import { Injectable } from '@angular/core';
import { Bill } from '../models/bill';
import {BILLS} from '../data-sets/bills-set';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private Bills: Bill[];

  constructor() {
    this.Bills = BILLS;
  }

  getBills(): Bill[] {
    return this.Bills;
  }
}
