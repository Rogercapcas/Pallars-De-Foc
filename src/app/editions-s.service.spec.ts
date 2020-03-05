import { TestBed } from '@angular/core/testing';

import { EditionsSService } from './editions-s.service';

describe('EditionsSService', () => {
  let service: EditionsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditionsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
