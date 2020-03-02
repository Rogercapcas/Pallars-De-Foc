import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {UsersComponent} from './components/users/users.component';
import {AppBaseComponent} from './components/app-base/app-base.component';
const routes: Routes = [
  {path : '', component: AppBaseComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'users', component: UsersComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

