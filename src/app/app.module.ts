import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './components/app-base/app-base.component';
import { IndexComponent } from './components/editions-index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BudgetDetailComponent } from './components/budget-detail/budget-detail.component';
import { BillsComponent } from './components/bills/bills.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';
import { BillInputComponent } from './components/bill-input/bill-input.component';
import { BudgetInputComponent } from './components/budget-input/budget-input.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
// @ts-ignore
import { fakeBackendProvider} from './_helpers/fake-backend';
import { BudgetEditComponent } from './components/budget-edit/budget-edit.component';
import { EditionInputComponent } from './components/edition-input/edition-input.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { OrganizationDetailComponent } from './components/organization-detail/organization-detail.component';
import { OrganizationInputComponent } from './components/organization-input/organization-input.component';

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
    BillDetailComponent,
    BillInputComponent,
    BudgetInputComponent,
    BudgetEditComponent,
    EditionInputComponent,
    UserInputComponent,
    OrganizationsComponent,
    OrganizationDetailComponent,
    OrganizationInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
