import { Component, OnInit } from '@angular/core';
import {Edition} from '../../models/edition';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edition-input',
  templateUrl: './edition-input.component.html',
  styleUrls: ['./edition-input.component.css']
})
export class EditionInputComponent implements OnInit {
  edition: Edition;
  editionForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editionForm = this.fb.group({
      year: ['', Validators.required],
      name: ['', Validators.required],
      generalManagers: ['', Validators.required],
      humanResources: [''],
      billsManager: [''],
      barManagers: [''],
      organizationsManager: ['']
    });
  }
  get f() { return this.editionForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.edition = new Edition(this.editionForm.value.year, this.editionForm.value.name, this.editionForm.value.generalManagers, this.editionForm.value.humanResources, this.editionForm.value.billsManager, this.editionForm.value.barManagers, this.editionForm.value.organizationsManager);
    console.log(this.editionForm);
  }
}
