import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EditionsSService} from '../../services/editions-s.service';
import {Edition} from '../../models/edition';

@Component({
  selector: 'app-budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.css']
})
export class BudgetInputComponent {
  editions = this.es.getEditions();
  budgetForm = this.fb.group({
    name:  ['', Validators.required],
    edition:  ['', Validators.required],
    /*concepts: this.fb.group({
      income: ['', Validators.required],
      concept:  ['', Validators.required],
      ammount: ['', Validators.required]
    }),
    totalAmmount:  ['', Validators.required],*/
    comments:  ['']
  });

  constructor(private fb: FormBuilder, private es: EditionsSService) { }

  onSubmit() {
    console.warn(this.budgetForm.value);
  }

}
