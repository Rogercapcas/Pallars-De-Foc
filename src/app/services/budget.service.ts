import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
import { Edition } from '../models/edition';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private BUDGETS: Budget[];

  constructor() {

  }

  getBudgets(): Budget[] {
    return this.BUDGETS;
  }
}
