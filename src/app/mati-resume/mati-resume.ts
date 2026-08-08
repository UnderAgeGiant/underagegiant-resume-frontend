import { Component, DestroyRef, ElementRef, afterNextRender, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ResumeContent, RESUME_CONTENT } from './mati-resume.content';
import { buildResumeStructuredData, buildResumeTitle } from './mati-resume.seo';

const STRUCTURED_DATA_SCRIPT_ID = 'resume-structured-data';

@Component({
  selector: 'app-mati-resume',
  templateUrl: './mati-resume.html',
  styleUrl: './mati-resume.css'
})
export class MatiResume {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly lang = signal<'es' | 'en'>('es');
  protected readonly t = computed(() => RESUME_CONTENT[this.lang()]);

  constructor() {
    // afterNextRender only runs in the browser (post-hydration), so this
    // stays a no-op during server-side prerendering, where IntersectionObserver
    // doesn't exist.
    afterNextRender(() => this.setupRevealObserver());

    // Runs during prerendering too, so the title/description/JSON-LD are
    // baked into the static HTML rather than only appearing after hydration.
    effect(() => this.updateSeoTags(this.t()));
  }

  protected setLang(lang: 'es' | 'en'): void {
    this.lang.set(lang);
  }

  private updateSeoTags(content: ResumeContent): void {
    this.titleService.setTitle(buildResumeTitle(content));
    this.meta.updateTag({ name: 'description', content: content.resumen });

    let script = this.document.getElementById(
      STRUCTURED_DATA_SCRIPT_ID
    ) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = STRUCTURED_DATA_SCRIPT_ID;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildResumeStructuredData(content));
  }

  private setupRevealObserver(): void {
    const revealEls = Array.from(
      this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));

    this.destroyRef.onDestroy(() => io.disconnect());
  }
}
