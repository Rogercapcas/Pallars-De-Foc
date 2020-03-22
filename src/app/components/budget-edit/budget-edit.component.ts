import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent {
  budged: Budget;

  constructor(b: Budget) {
    this.budged = b;
  }

  addConcept(income: boolean, concept: string, amount: number) {
    this.budged.concepts.concat([income, concept, amount]);
  }

}
