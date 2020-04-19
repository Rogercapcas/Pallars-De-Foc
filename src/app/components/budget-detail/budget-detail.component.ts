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
  budget = this.edition.budget;
  edit = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.edit = true;
  }

}
