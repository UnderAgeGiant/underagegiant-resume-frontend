import { Routes } from '@angular/router';
import { ResumeViewer } from './resume-viewer/resume-viewer';
import { MatiResume } from './mati-resume/mati-resume';

export const routes: Routes = [
  { path: 'mati-resume', component: MatiResume },
  { path: 'ceci-resume', component: ResumeViewer, data: { file: 'ceci-resume.html' } },
  { path: '', redirectTo: 'mati-resume', pathMatch: 'full' }
];
