import { Injectable } from '@angular/core';
import { Bill } from './models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private BILLS: Bill[];
  constructor() { }

  getBills(): Bill[] {
    return this.BILLS;
  }
}
