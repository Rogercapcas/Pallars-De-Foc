import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css']
})
export class AppBaseComponent {
  currentUser: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe( x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
