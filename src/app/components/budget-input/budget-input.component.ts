import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.css']
})
export class BudgetInputComponent implements OnInit {
  budgetForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.submitted = true;
    console.log('ha entrat a budget-input.component.ts/submitted()');
    console.warn(this.budgetForm.value);
  }

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
      name:  ['', Validators.required],
      edition:  ['', (Validators.required as unknown as number)],
      /*concepts: this.fb.group({
        income: ['', Validators.required],
        concept:  ['', Validators.required],
        ammount: ['', Validators.required]
      }),
      totalAmmount:  ['', Validators.required],*/
      comments:  ['']
    });
  }

}
