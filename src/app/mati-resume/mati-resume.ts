import { AfterViewInit, Component, DestroyRef, ElementRef, computed, inject, signal } from '@angular/core';
import { RESUME_CONTENT } from './mati-resume.content';

@Component({
  selector: 'app-mati-resume',
  templateUrl: './mati-resume.html',
  styleUrl: './mati-resume.css'
})
export class MatiResume implements AfterViewInit {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly lang = signal<'es' | 'en'>('es');
  protected readonly t = computed(() => RESUME_CONTENT[this.lang()]);

  protected setLang(lang: 'es' | 'en'): void {
    this.lang.set(lang);
  }

  ngAfterViewInit(): void {
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
