import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

interface Project {
  title: string;
  descriptionEn: string;
  descriptionDe: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Project One',
    descriptionEn: 'A short description of what this project does and what problem it solves.',
    descriptionDe: 'Eine kurze Beschreibung dessen, was dieses Projekt macht und welches Problem es löst.',
    image: 'assets/img/projects/project1.jpg',
    liveUrl: 'https://your-project-one.com',
    githubUrl: 'https://github.com/yourusername/project-one',
    technologies: ['Angular', 'TypeScript', 'SCSS']
  },
  {
    title: 'Project Two',
    descriptionEn: 'A short description of what this project does and what problem it solves.',
    descriptionDe: 'Eine kurze Beschreibung dessen, was dieses Projekt macht und welches Problem es löst.',
    image: 'assets/img/projects/project2.jpg',
    liveUrl: 'https://your-project-two.com',
    githubUrl: 'https://github.com/yourusername/project-two',
    technologies: ['JavaScript', 'HTML', 'CSS']
  }
];

const projectsContent: Record<'en' | 'de', { heading: string; subheading: string; live: string; code: string }> = {
  en: {
    heading: 'My Projects',
    subheading: 'A selection of things I have built',
    live: 'Live Demo',
    code: 'View Code'
  },
  de: {
    heading: 'Meine Projekte',
    subheading: 'Eine Auswahl meiner Arbeiten',
    live: 'Live Demo',
    code: 'Code ansehen'
  }
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  private languageService = inject(LanguageService);

  projects = projects;
  content = computed(() => projectsContent[this.languageService.language()]);
  language = computed(() => this.languageService.language());
}
