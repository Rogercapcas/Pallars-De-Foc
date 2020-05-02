import { Injectable } from '@angular/core';
import { Edition } from '../models/edition';
import { EDITIONS } from '../data-sets/editions-set';

@Injectable({
  providedIn: 'root'
})
export class EditionsSService {
  editions: Edition[];
  constructor() {
    this.editions = EDITIONS;
  }

  getEditions(): Edition[] {
    return this.editions;
  }

  getEditionYear(year: number): Edition {
    for (const edition of this.editions) {
      if (edition.year === year) {
        return edition;
      }
    }
  }

  addEdition(ed: Edition) {
    this.editions.push(ed);
    // Falta passar aquesta llista d'edicións a "EDITIONS"
  }
}
