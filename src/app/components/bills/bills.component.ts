import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/bill';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills: Bill[];
  selectedBill: Bill;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(bill: Bill): void {
    this.selectedBill = bill;
}

}
