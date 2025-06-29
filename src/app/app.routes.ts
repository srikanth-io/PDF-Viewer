import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/pdfviewer/pdfviewer').then(m => m.PdfViewerComponent)
}];
