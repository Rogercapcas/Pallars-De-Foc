import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  billForm = this.fb.group({
    billNumber: ['', Validators.required],
    edition: ['', Validators.required],
    date: ['', Validators.required],
    from: ['', Validators.required],
    to: ['', Validators.required],
    concept: ['', Validators.required],
    totalBT: ['', Validators.required],
    taxes: ['', Validators.required],
    income: [''],
    comments: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.billForm.value);
  }

}
