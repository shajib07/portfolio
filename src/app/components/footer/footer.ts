import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language';

type Lang = 'en' | 'de';

type FooterContent = {
  rights: string;
  imprint: string;
  privacy: string;
}

const footerContent: Record<Lang, FooterContent> = {
  en: {
    rights: 'All rights reserved.',
    imprint: 'Imprint',
    privacy: 'Privacy Policy'
  },
  de: {
    rights: 'Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung'
  }
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  private languageService = inject(LanguageService);

  content = computed(() => footerContent[this.languageService.language()]);
  year = new Date().getFullYear();
}