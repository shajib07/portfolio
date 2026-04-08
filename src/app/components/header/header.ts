import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  protected languageService = inject(LanguageService);
  protected menuOpen = signal(false);

  protected sectionNav = [
    { fragment: 'about', labelEn: 'About', labelDe: 'Über mich' },
    { fragment: 'skills', labelEn: 'Skills', labelDe: 'Skills' },
    { fragment: 'projects', labelEn: 'Projects', labelDe: 'Projekte' },
    { fragment: 'experience', labelEn: 'Experience', labelDe: 'Erfahrung' },
    { fragment: 'contact', labelEn: 'Contact', labelDe: 'Kontakt' },
  ] as const;

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}