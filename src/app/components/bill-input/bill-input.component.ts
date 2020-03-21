import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/bill';
import { Edition } from '../../models/edition';
import { FormGroup, FormControl} from '@angular/forms';
import { Organization } from '../../models/organization';
import { EditionsSService} from '../../services/editions-s.service';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  editions = new EditionsSService().getEditions();
  billForm = new FormGroup({
    billNumber: new FormControl('Number'),
    edition: new FormControl('Edition'),
    date: new FormControl('Date'),
    from: new FormControl('Organization'),
    to: new FormControl('Organization'),
    concept: new FormControl('text'),
    totalBT: new FormControl('Float'),
    taxes: new FormControl('Float'),
    income: new FormControl('Boolean'),
    comments: new FormControl('text')
  });

}
