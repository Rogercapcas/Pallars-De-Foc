import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget';
import { BudgetService } from '../../budget.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[];
  selectedBudget: Budget;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getBudgets();
  }

  onSelect(budget: Budget): void {
    this.selectedBudget = budget;
}

  getBudgets(): void {
    this.budgets = this.budgetService.getBudgets();
  }

}
