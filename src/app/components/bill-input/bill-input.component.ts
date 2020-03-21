import { Component} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  billForm = new FormGroup({
    billNumber: new FormControl(''),
    edition: new FormControl(''),
    date: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    concept: new FormControl(''),
    totalBT: new FormControl(''),
    taxes: new FormControl(''),
    income: new FormControl(''),
    comments: new FormControl('')
  });
  onSubmit() {
    console.warn(this.billForm.value);
  }

}
