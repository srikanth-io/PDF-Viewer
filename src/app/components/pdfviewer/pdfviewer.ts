import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerService } from '../../services/pdfviewer';

@Component({
  standalone: true,
  selector: 'app-pdf-viewer',
  imports: [CommonModule, FormsModule, NgxExtendedPdfViewerModule],
  template: `
    <div class="container py-4">
      <h2 class="mb-3 text-primary">PDF Viewer</h2>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          [(ngModel)]="pdfUrl"
          placeholder="Enter PDF URL or path"
        />
        <button class="btn btn-outline-primary" (click)="loadPdf()">Load PDF</button>
      </div>

      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>

      <div *ngIf="pdfSrc" class="border rounded p-2">
        <ngx-extended-pdf-viewer
          [src]="pdfSrc"
           [showFreeFloatingBar]="true"
           [showDownloadButton]="false"
  [showPrintButton]="false"
  [showPresentationModeButton]="false"
  [showOpenFileButton]="false"
  [showSecondaryToolbarButton]="false"
  [showHandToolButton]="false"
  [showSpreadButton]="false"
  [showPropertiesButton]="false"
  [showDrawEditor]="false"
  [showTextEditor]="false"
  [showHighlightEditor]="false"
  [showStampEditor]="false"
          useBrowserLocale="true"
          height="80vh"
          (pdfLoadingFailed)="onPdfError($event)"
        ></ngx-extended-pdf-viewer>
      </div>
    </div>
  `,
})
export class PdfViewerComponent {
  pdfUrl = '';
  pdfSrc?: string;
  errorMessage: string | null = null;

  constructor(private pdfService: PdfViewerService) {
    this.pdfService.pdfSrc$.subscribe((src) => (this.pdfSrc = src));
    this.pdfService.error$.subscribe((msg) => (this.errorMessage = msg));
  }

  loadPdf() {
    this.pdfService.loadPdf(this.pdfUrl);
  }

  onPdfError(event: any) {
    this.pdfService.handlePdfError(event);
  }
}
