import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdfviewer } from './pdfviewer';

describe('Pdfviewer', () => {
  let component: Pdfviewer;
  let fixture: ComponentFixture<Pdfviewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pdfviewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdfviewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
