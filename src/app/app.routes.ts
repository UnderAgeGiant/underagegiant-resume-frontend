import { Routes } from '@angular/router';
import { ResumeViewer } from './resume-viewer/resume-viewer';

export const routes: Routes = [
  { path: 'mati-resume', component: ResumeViewer, data: { file: 'mati-resume.html' } },
  { path: 'ceci-resume', component: ResumeViewer, data: { file: 'ceci-resume.html' } },
  { path: '', redirectTo: 'mati-resume', pathMatch: 'full' }
];
