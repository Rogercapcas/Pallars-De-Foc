import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {UsersComponent} from './components/users/users.component';
import {AppBaseComponent} from './components/app-base/app-base.component';
import {IndexComponent} from './components/index/index.component';
const routes: Routes = [
  {path : '', component: AppBaseComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'index', component: IndexComponent},
  {path: '**', component: AppBaseComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

