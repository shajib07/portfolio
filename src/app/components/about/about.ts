import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface AboutContent {
  heading: string;
  subheading: string;
  paragraph: string;
  location: string;
  available: string;
  serviceHeading: string;
  services: ServiceItem[];
}

const aboutContent: Record<'en' | 'de', AboutContent> = {
  en: {
    heading: 'About Me',
    subheading: 'Full Stack Developer with mobile engineering experience',
    paragraph:
      'I am a passionate frontend developer with a strong eye for clean design and user experience. I enjoy turning complex problems into simple, beautiful and intuitive solutions. When I am not coding, I am constantly learning new technologies.',
    location: 'Location: Germany',
    available: 'Available for work',

    serviceHeading: 'What I do',

    services: [
      {
        icon: 'assets/img/about/code-xml.svg',
        title: 'Frontend Development',
        description:
          'Building responsive and interactive user interfaces with Angular, Next.js, and TypeScript.',
      },
      {
        icon: 'assets/img/about/server.svg',
        title: 'Backend Development',
        description:
          'Creating scalable server-side applications using Node.js, NestJS, and Python.',
      },
      {
        icon: 'assets/img/about/tablet-smartphone.svg',
        title: 'Mobile Development',
        description:
          'Developing native and cross-platform mobile apps with Android and Flutter.',
      },
    ],

  },
  de: {
    heading: 'Über mich',
    subheading: 'Full-Stack-Entwickler mit Erfahrung in der mobilen App-Entwicklung',
    paragraph:
      'Ich bin ein leidenschaftlicher Frontend-Entwickler mit einem Blick für sauberes Design und Benutzererfahrung. Ich verwandle komplexe Probleme gerne in einfache, schöne und intuitive Lösungen. Wenn ich nicht programmiere, lerne ich ständig neue Technologien.',
    location: 'Standort: Deutschland',
    available: 'Offen für Projekte',

    serviceHeading: 'Was ich mache',

    services: [
      {
        icon: 'assets/img/about/code-xml.svg',
        title: 'Frontend-Entwicklung',
        description:
          'Erstellung responsiver und interaktiver Benutzeroberflächen mit Angular, Next.js und TypeScript.',
      },
      {
        icon: 'assets/img/about/server.svg',
        title: 'Backend-Entwicklung',
        description:
          'Entwicklung skalierbarer serverseitiger Anwendungen mit Node.js, NestJS und Python.',
      },
      {
        icon: 'assets/img/about/tablet-smartphone.svg',
        title: 'Mobile Entwicklung',
        description:
          'Entwicklung nativer und plattformübergreifender mobiler Apps mit Android und Flutter.',
      },
    ],
  },
};

@Component({
  selector: 'app-about',
  imports: [FadeInDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  private languageService = inject(LanguageService);
  content = computed(() => aboutContent[this.languageService.language()]);
}
