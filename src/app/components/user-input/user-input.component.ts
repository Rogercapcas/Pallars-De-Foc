import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      superuser: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      token: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user = new User(this.userForm.value.id, this.userForm.value.password, this.userForm.value.name, this.userForm.value.surname, this.userForm.value.superuser, this.userForm.value.email, this.userForm.value.phoneNumber, this.userForm.value.token);
  }

}
