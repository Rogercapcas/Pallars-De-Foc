import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../../models/organization';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  @Input() organization: Organization;

  constructor() { }

  ngOnInit(): void {
  }

}
