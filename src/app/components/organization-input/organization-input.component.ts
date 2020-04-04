import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Organization} from '../../models/organization';

@Component({
  selector: 'app-organization-input',
  templateUrl: './organization-input.component.html',
  styleUrls: ['./organization-input.component.css']
})
export class OrganizationInputComponent implements OnInit {
  organization: Organization;
  organizationForm: FormGroup;
  sumbitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.organizationForm = this.fb.group( {
      nif: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      addressStreet: ['', Validators.required],
      numKm: ['', Validators.required],
      contactName: ['', Validators.required],
      stair: [''],
      floor: [''],
      door: ['']
    });
  }
  onSubmit() {
    this.sumbitted = true;
    console.log('Sha entrat a organization-input.component.ts/onSubmit()');
  }

}
