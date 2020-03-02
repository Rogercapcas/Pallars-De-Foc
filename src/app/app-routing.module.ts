import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {UsersComponent} from './components/users/users.component';
const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'users', component: UsersComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

