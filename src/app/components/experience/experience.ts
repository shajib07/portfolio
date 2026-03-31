import { Component, computed, inject } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { LanguageService } from '../../services/language';

type Lang = 'en' | 'de';

interface ExperienceItemBase {
  id: string;
  duration: string;
}

interface ExperienceItemTranslation {
  title: string;
  company: string;
  role: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

interface ExperienceCommonContent {
  heading: string;
  subheading: string;
  note: string;

  keyContributionText: string;
  technologyUsedText: string;
  privateLabel: string;
}

const experiences: ExperienceItemBase[] = [
  {
    id: 'ecommerce',
    duration: '2019 - 2023',
  },
  {
    id: 'healthcare',
    duration: '2021 - 2022',
  },
];

const experienceTranslations: Record<Lang, Record<string, ExperienceItemTranslation>> = {
  en: {
    ecommerce: {
      title: 'Enterprise E-Commerce Platform',
      company: 'Tech Solutions Inc.',
      role: 'Senior Android Developer',
      description:
        'Led the development of a large-scale e-commerce Android application serving 2M+ users.',
      contributions: ['Implemented MVVM architecture', 'Improved performance and reduced crashes'],
      technologies: ['Kotlin', 'MVVM', 'Retrofit'],
    },

    healthcare: {
      title: 'Healthcare Mobile App',
      company: 'HealthTech Solutions',
      role: 'Android Developer',
      description: 'Built a secure healthcare app with telemedicine features.',
      contributions: ['Implemented secure authentication', 'Built video consultation feature'],
      technologies: ['Kotlin', 'WebRTC', 'SQLite'],
    },
  },

  de: {
    ecommerce: {
      title: 'Enterprise E-Commerce Plattform',
      company: 'Tech Solutions GmbH',
      role: 'Senior Android Entwickler',
      description:
        'Leitung der Entwicklung einer großen E-Commerce-App mit über 2 Millionen Nutzern.',
      contributions: [
        'MVVM-Architektur implementiert',
        'Performance verbessert und Abstürze reduziert',
      ],
      technologies: ['Kotlin', 'MVVM', 'Retrofit'],
    },

    healthcare: {
      title: 'Mobile Healthcare-App',
      company: 'HealthTech Solutions',
      role: 'Android Entwickler',
      description: 'Entwicklung einer sicheren Healthcare-App mit Telemedizin-Funktion.',
      contributions: ['Sichere Authentifizierung implementiert', 'Videoberatung integriert'],
      technologies: ['Kotlin', 'WebRTC', 'SQLite'],
    },
  },
};

const experienceContent: Record<Lang, ExperienceCommonContent> = {
  en: {
    heading: 'Professional Experience',
    subheading: "Selected industry projects and contributions where I've made impact",
    note: 'Code repositories are private and confidential to respective organizations',

    keyContributionText: 'Key Contributions',
    technologyUsedText: 'Technologies Used',
    privateLabel: 'Private',
  },

  de: {
    heading: 'Berufserfahrung',
    subheading: 'Ausgewählte Industrieprojekte und Beiträge mit messbarem Einfluss',
    note: 'Code-Repositories sind privat und vertraulich für die jeweiligen Organisationen',

    keyContributionText: 'Wichtige Beiträge',
    technologyUsedText: 'Verwendete Technologien',
    privateLabel: 'Privat',
  },
};

@Component({
  selector: 'app-experience',
  imports: [FadeInDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  private languageService = inject(LanguageService);
  language = computed(() => this.languageService.language());

  content = computed(() => experienceContent[this.language()]);

  experienceCards = computed(() => {
    const lang = this.language();
    const translations = experienceTranslations[lang];

    return experiences.map((exp) => ({
      ...exp,
      t: translations[exp.id],
    }));
  });
  experiences = experiences;
}
