import { Component, OnInit } from '@angular/core';
import { Edition } from '../../models/edition';
import { EditionsSService } from '../../services/editions-s.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  editions: Edition[];
  selectedEdition: Edition;

  constructor(private editionsSService: EditionsSService, private router: Router) { }

  ngOnInit(): void {
    this.getEditions();
  }

  onSelect(url, edition: Edition) {
    this.selectedEdition = edition;
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log('Navigate successful!');
      } else {
        console.log('Navigate failure!');
      }
    });
  }
  getEditions(): void {
    this.editions = this.editionsSService.getEditions();
  }

}
