import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../models/bill';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  @Input() bill: Bill;
  constructor() { }

  ngOnInit(): void {
  }

}
