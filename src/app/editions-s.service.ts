import { Injectable } from '@angular/core';
import { Edition } from './models/edition';
import { EDITIONS } from './editions-set';

@Injectable({
  providedIn: 'root'
})
export class EditionsSService {

  constructor() { }

  getEditions(): Edition[] {
    return EDITIONS;
  }
}
