import { Injectable } from '@angular/core';
import {Organization} from '../models/organization';
import {HttpClient} from '@angular/common/http';
import { ORGANIZATIONS } from '../data-sets/organizations-set';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getOrganizations() {
    return ORGANIZATIONS;
  }
}
