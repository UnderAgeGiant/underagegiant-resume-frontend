import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resume-viewer',
  templateUrl: './resume-viewer.html',
  styleUrl: './resume-viewer.css'
})
export class ResumeViewer {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly data = toSignal(this.route.data, { requireSync: true });

  protected readonly resumeUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(`resumes/${this.data()['file']}`)
  );
}
