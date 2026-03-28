import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';

interface AboutContent {
  heading: string,
  subheading: string,
  paragraph: string,
  location: string,
  available: string
}

const aboutContent: Record<'en' | 'de', AboutContent> = {
    en: {
    heading: 'About Me',
    subheading: 'Frontend Developer based in Germany',
    paragraph: 'I am a passionate frontend developer with a strong eye for clean design and user experience. I enjoy turning complex problems into simple, beautiful and intuitive solutions. When I am not coding, I am constantly learning new technologies.',
    location: 'Location: Germany',
    available: 'Available for work'
  },
  de: {
    heading: 'Über mich',
    subheading: 'Frontend-Entwickler aus Deutschland',
    paragraph: 'Ich bin ein leidenschaftlicher Frontend-Entwickler mit einem Blick für sauberes Design und Benutzererfahrung. Ich verwandle komplexe Probleme gerne in einfache, schöne und intuitive Lösungen. Wenn ich nicht programmiere, lerne ich ständig neue Technologien.',
    location: 'Standort: Deutschland',
    available: 'Offen für Projekte'
  }
}

@Component({
  selector: 'app-about',
  imports: [FadeInDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  private languageService = inject(LanguageService)
  content = computed(() => aboutContent[this.languageService.language()])
}
