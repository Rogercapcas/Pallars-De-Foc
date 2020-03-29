import { Component, OnInit } from '@angular/core';
import { Edition } from '../../models/edition';
import { EditionsSService } from '../../services/editions-s.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  editions: Edition[];
  selectedEdition: Edition;

  constructor(private editionsSService: EditionsSService) { }

  ngOnInit(): void {
    this.getEditions();
  }

  onSelect(edition: Edition) {
    this.selectedEdition = edition;
  }
  getEditions(): void {
    this.editions = this.editionsSService.getEditions();
  }

}
