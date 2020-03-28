import { Component, OnInit } from '@angular/core';
import {Organization} from '../../models/organization';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  organizations: Organization[];
  selectedOrganization: Organization;

  constructor(private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(org: Organization): void {
    this.selectedOrganization = org;
  }

  getUsers() {
    this.organizations = this.orgService.getOrganizations();
  }
}
