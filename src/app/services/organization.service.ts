import { Injectable } from '@angular/core';
import {Organization} from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private ORGANIZATIONS: Organization;

  constructor() { }

  getOrganizations() {
    return this.ORGANIZATIONS;
  }
}
