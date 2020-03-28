import { Injectable } from '@angular/core';
import { Edition } from '../models/edition';
import { EDITIONS } from '../data-sets/editions-set';

@Injectable({
  providedIn: 'root'
})
export class EditionsSService {

  constructor() { }

  getEditions(): Edition[] {
    return EDITIONS;
  }

  getEditionYear(edition: Edition) {
    return edition.year;
  }
}
