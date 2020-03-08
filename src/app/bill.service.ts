import { Injectable } from '@angular/core';
import { Bill } from './models/bill';
import { Edition } from './models/edition';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private BILLS: Bill[];

  constructor(private edition: Edition) { }

  getBills(): Bill[] {
    return this.BILLS;
  }
}
