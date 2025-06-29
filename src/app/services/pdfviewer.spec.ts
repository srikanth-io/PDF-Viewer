import { TestBed } from '@angular/core/testing';

import { Pdfviewer } from './pdfviewer';

describe('Pdfviewer', () => {
  let service: Pdfviewer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pdfviewer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
