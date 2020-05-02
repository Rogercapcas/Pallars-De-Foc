import {Component, Input, OnInit} from '@angular/core';
import { Bill } from '../../models/bill';
import { BillService } from '../../services/bill.service';
import { Edition } from '../../models/edition';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  @Input() edition: Edition = new Edition(2020, 'V');
  public bills: Bill[];
  public selectedBill: Bill;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.getBills();
  }

  onSelect(bill: Bill): void {
    this.selectedBill = bill;
  }

  getBills(): void {
    this.edition.bills = this.billService.getBills();
    this.bills = this.edition.bills;
  }

}
