import { Injectable } from '@angular/core';
import {Organization} from '../models/organization';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private ORGANIZATIONS: Organization[];

  constructor(private http: HttpClient) { }

  getOrganizations() {
    this.ORGANIZATIONS = [];
    return this.ORGANIZATIONS;
  }
}
