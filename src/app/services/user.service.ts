import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { USERS } from '../users-set';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): User[] {
    return USERS;
  }

  getall() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
}
