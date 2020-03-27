import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Bill } from '../../models/bill';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  bill: Bill;
  billForm = this.fb.group({
    billNumber: ['', Validators.required],
    edition: ['', Validators.required],
    date: ['', Validators.required],
    from: ['', Validators.required],
    toorg: ['', Validators.required],
    concept: ['', Validators.required],
    totalBT: ['', Validators.required],
    taxes: ['', Validators.required],
    income: [false],
    comments: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.billForm.value);
    // @ts-ignore
    this.bill = new Bill(fb.billNumber, fb.edition, fb.date, fb.from, fb.toorg, fb.concept, fb.totalBT, fb.taxes, fb.income, fb.comments);
    print();
  }

}
