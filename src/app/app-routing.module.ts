import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {UsersComponent} from './components/users/users.component';
import {AppBaseComponent} from './components/app-base/app-base.component';
import {IndexComponent} from './components/editions-index/index.component';
import {BillInputComponent} from './components/bill-input/bill-input.component';
import {BudgetInputComponent} from './components/budget-input/budget-input.component';
import {BudgetEditComponent} from './components/budget-edit/budget-edit.component';
import {UserInputComponent} from './components/user-input/user-input.component';
import {OrganizationsComponent} from './components/organizations/organizations.component';
import {OrganizationInputComponent} from './components/organization-input/organization-input.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BillsComponent} from './components/bills/bills.component';
import {BudgetsComponent} from './components/budgets/budgets.component';
import {BudgetDetailComponent} from './components/budget-detail/budget-detail.component';
import {EditionInputComponent} from './components/edition-input/edition-input.component';

const routes: Routes = [
  {path : '', component: IndexComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'index', component: IndexComponent},
  {path: 'billinput', component: BillInputComponent},
  {path: 'budgetinput', component: BudgetInputComponent},
  {path: 'budgetedit', component: BudgetEditComponent},
  {path: 'budgetdetail', component: BudgetDetailComponent},
  {path: 'userinput', component: UserInputComponent},
  {path: 'organizations', component: OrganizationsComponent},
  {path: 'orginput', component: OrganizationInputComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'bills', component: BillsComponent},
  {path: 'budgets', component: BudgetsComponent},
  {path: 'editioninput', component: EditionInputComponent},
  {path: '**', component: AppBaseComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

