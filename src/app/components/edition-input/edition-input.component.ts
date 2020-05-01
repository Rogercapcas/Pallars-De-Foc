import { Component, OnInit } from '@angular/core';
import {Edition} from '../../models/edition';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EditionsSService} from '../../services/editions-s.service';

@Component({
  selector: 'app-edition-input',
  templateUrl: './edition-input.component.html',
  styleUrls: ['./edition-input.component.css']
})
export class EditionInputComponent implements OnInit {
  edition: Edition;
  editionForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, private editionsSService: EditionsSService) { }

  ngOnInit() {
    this.editionForm = this.fb.group({
      year: ['', Validators.required],
      name: ['', Validators.required]
    });
  }
  get f() { return this.editionForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.edition = new Edition(this.editionForm.value.year, this.editionForm.value.name);
    console.log(this.editionForm);
    this.editionsSService.addEdition(this.edition);
    this.router.navigate(['index']);
    return this.edition;
  }
}
