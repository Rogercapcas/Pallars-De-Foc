import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {AppRoutingModule} from './app-routing.module';
import { AppBaseComponent } from './components/app-base/app-base.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BudgetDetailComponent } from './components/budget-detail/budget-detail.component';
import { BillsComponent } from './components/bills/bills.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BudgetsComponent,
    UsersComponent,
    UserDetailComponent,
    AppBaseComponent,
    IndexComponent,
    SidebarComponent,
    BudgetDetailComponent,
    BillsComponent,
    BillDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
