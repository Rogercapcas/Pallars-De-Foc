import {Component, Input, OnInit} from '@angular/core';
import { Budget } from '../../models/budget';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {
  @Input() budget: Budget;

  constructor() { }

  ngOnInit(): void {
  }

}
