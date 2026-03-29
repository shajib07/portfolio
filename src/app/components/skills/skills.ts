import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';

interface Skill {
  name: string;
  icon: string;
  accent: string;
}

interface SkillCategory {
  labelEn: string;
  labelDe: string;
  color: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    labelEn: 'Frontend Development',
    labelDe: 'Frontend-Entwicklung',
    color: '#4F6EF7',
    icon: '</>',
    skills: [
      {
        name: 'Angular',
        icon: 'assets/img/skills/angular.svg',
        accent: '#DD0031',
      },
      {
        name: 'Next.js',
        icon: 'assets/img/skills/nextdotjs.svg',
        accent: '#111111',
      },
      {
        name: 'TypeScript',
        icon: 'assets/img/skills/typescript.svg',
        accent: '#3178C6',
      },
      {
        name: 'React',
        icon: 'assets/img/skills/react.svg',
        accent: '#61DAFB',
      },
      {
        name: 'HTML/CSS',
        icon: 'assets/img/skills/html5.svg',
        accent: '#E34F26',
      },
      {
        name: 'Tailwind CSS',
        icon: 'assets/img/skills/tailwindcss.svg',
        accent: '#06B6D4',
      },
    ],
  },
  {
    labelEn: 'Backend Development',
    labelDe: 'Backend-Entwicklung',
    color: '#22C55E',
    icon: '⚙',
    skills: [
      {
        name: 'Node.js',
        icon: 'assets/img/skills/nodedotjs.svg',
        accent: '#339933',
      },
      {
        name: 'NestJS',
        icon: 'assets/img/skills/nestjs.svg',
        accent: '#E0234E',
      },
      {
        name: 'Python',
        icon: 'assets/img/skills/python.svg',
        accent: '#3776AB',
      },
      {
        name: 'PostgreSQL',
        icon: 'assets/img/skills/postgresql.svg',
        accent: '#4169E1',
      },
      {
        name: 'MongoDB',
        icon: 'assets/img/skills/mongodb.svg',
        accent: '#47A248',
      },
      {
        name: 'REST APIs',
        icon: 'assets/img/skills/vercel.svg',
        accent: '#555555',
      },
    ],
  },
  {
    labelEn: 'Mobile Development',
    labelDe: 'Mobile-Entwicklung',
    color: '#A855F7',
    icon: '📱',
    skills: [
      {
        name: 'Android',
        icon: 'assets/img/skills/android.svg',
        accent: '#3DDC84',
      },
      {
        name: 'Flutter',
        icon: 'assets/img/skills/flutter.svg',
        accent: '#02569B',
      },
      {
        name: 'Kotlin',
        icon: 'assets/img/skills/kotlin.svg',
        accent: '#7F52FF',
      },
      {
        name: 'Dart',
        icon: 'assets/img/skills/dart.svg',
        accent: '#0175C2',
      },
    ],
  },
];
const skillsContent: Record<'en' | 'de', { heading: string; subheading: string }> = {
  en: {
    heading: 'My Skills',
    subheading: 'Technologies I work with',
  },
  de: {
    heading: 'Meine Skills',
    subheading: 'Technologien, mit denen ich arbeite',
  },
};

@Component({
  selector: 'app-skills',
  imports: [FadeInDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  protected languageService = inject(LanguageService);

  categories = skillCategories;
  content = computed(() => skillsContent[this.languageService.language()]);
  language = computed(() => this.languageService.language());
}
