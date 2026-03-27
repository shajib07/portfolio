import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = signal<'en' | 'de'>('en');

  toggle(): void {
    const next = this.language() === 'en' ? 'de' : 'en';
    this.language.set(next);
  }
}
