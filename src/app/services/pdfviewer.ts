import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PdfViewerService {
  private pdfSrcSubject = new BehaviorSubject<string | undefined>(undefined);
  pdfSrc$ = this.pdfSrcSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  loadPdf(url: string) {
    if (!url || !url.trim()) {
      this.setError('Please enter a valid PDF URL.');
      this.setPdf(undefined);
      return;
    }

    if (!url.toLowerCase().endsWith('.pdf')) {
      this.setError('The file must be a PDF (ends with .pdf).');
      this.setPdf(undefined);
      return;
    }

    this.setError(null);
    this.setPdf(url);
  }

  handlePdfError(event: any) {
    console.error('PDF load error:', event);
    this.setError('Failed to load the PDF. Check the URL or server CORS settings.');
    this.setPdf(undefined);
  }

  private setPdf(url: string | undefined) {
    this.pdfSrcSubject.next(url);
  }

  private setError(message: string | null) {
    this.errorSubject.next(message);
  }
}
