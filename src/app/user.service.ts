import { Injectable } from '@angular/core';
import { User } from './users/user';
import { USERS } from './users-set';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
}
}
