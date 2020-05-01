import {Component, Input, OnInit} from '@angular/core';
import { Budget } from '../../models/budget';
import {Edition} from '../../models/edition';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {
  @Input() edition = new Edition(2021, 'V');
  editionControl: Edition;
  budget: Budget;
  edit = false;

  constructor() { }

  ngOnInit(): void {
    this.budget = this.edition.budget;
  }

  onSubmit() {
    this.edit = true;
    this.editionControl = this.edition;
  }

}
