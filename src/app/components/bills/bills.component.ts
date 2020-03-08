import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/bill';
import { BillService } from '../../bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills: Bill[];
  selectedBill: Bill;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
  }

  onSelect(bill: Bill): void {
    this.selectedBill = bill;
  }

  getBills(): void{
    this.bills = this.billService.getBills();
}

}
