import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';
import { TitleCasePipe } from '@angular/common';

type ProjectCategory = 'fullstack' | 'mobile';
type ProjectFilter = 'all' | ProjectCategory;

interface Project {
  title: string;
  descriptionEn: string;
  descriptionDe: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  category: ProjectCategory;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Android App',
    descriptionEn:
      'A native Android shopping app with product catalog, cart, payment flow, and order tracking.',
    descriptionDe:
      'Eine native Android-Shopping-App mit Produktkatalog, Warenkorb, Bezahlablauf und Bestellverfolgung.',
    image: 'assets/img/projects/ecommerce-android.jpg',
    liveUrl: '',
    githubUrl: 'https://github.com/yourusername/ecommerce-android',
    technologies: ['Kotlin', 'MVVM', 'Room', 'Retrofit'],
    category: 'mobile',
    featured: true,
  },
  {
    title: 'Task Management App',
    descriptionEn:
      'A Flutter productivity app for task tracking, reminders, and team collaboration.',
    descriptionDe:
      'Eine Flutter-Produktivitäts-App für Aufgabenverwaltung, Erinnerungen und Teamarbeit.',
    image: 'assets/img/projects/ecommerce-android.jpg',
    liveUrl: '',
    githubUrl: 'https://github.com/yourusername/task-management-flutter',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    category: 'mobile',
    featured: true,
  },
  {
    title: 'Project Management Dashboard',
    descriptionEn:
      'A full-stack dashboard for managing projects, teams, and deadlines with authentication and REST APIs.',
    descriptionDe:
      'Ein Full-Stack-Dashboard zur Verwaltung von Projekten, Teams und Deadlines mit Authentifizierung und REST-APIs.',
    image: 'assets/img/projects/ecommerce-android.jpg',
    liveUrl: 'https://your-live-demo.com',
    githubUrl: 'https://github.com/yourusername/project-management-dashboard',
    technologies: ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL'],
    category: 'fullstack',
    featured: true,
  },
];

const projectsContent: Record<
  'en' | 'de',
  { heading: string; subheading: string; live: string; code: string }
> = {
  en: {
    heading: 'My Projects',
    subheading: 'A selection of things I have built',
    live: 'Live Demo',
    code: 'View Code',
  },
  de: {
    heading: 'Meine Projekte',
    subheading: 'Eine Auswahl meiner Arbeiten',
    live: 'Live Demo',
    code: 'Code ansehen',
  },
};

@Component({
  selector: 'app-projects',
  imports: [FadeInDirective, TitleCasePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  private languageService = inject(LanguageService);
  projects = projects;
  selectedFilter = signal<ProjectFilter>('all');

  content = computed(() => projectsContent[this.languageService.language()]);
  language = computed(() => this.languageService.language());

  setFilter(filter: ProjectFilter): void {
    if (this.selectedFilter() !== filter) {
      this.selectedFilter.set(filter);
    }
  }

  filteredProjects = computed(() => {
    const selected = this.selectedFilter();

    if (selected === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === selected);
  });
}