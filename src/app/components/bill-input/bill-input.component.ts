import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Bill } from '../../models/bill';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent implements OnInit{
  bill: Bill;
  billForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.billForm = this.fb.group({
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
  }
  get f() { return this.billForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.billForm.invalid) {
      return; }
    // console.warn(this.billForm.value);
    console.log("hola");
    console.log(this.billForm);
    // @ts-ignore
    this.bill = new Bill(this.billForm.value.billNumber, this.billForm.value.edition, this.billForm.value.date, this.billForm.value.from, this.billForm.value.toorg, this.billForm.value.concept, this.billForm.value.totalBT, this.billForm.value.taxes, this.billForm.value.income, this.billForm.value.comments);
    console.log(this.billForm);
  }

}
