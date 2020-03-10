import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/bill';
import {EDITIONS} from '../../editions-set';
import { Edition} from '../../models/edition';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {



  onSubmit(): void {
  }

}
