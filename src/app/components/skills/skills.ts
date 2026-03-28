import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: 'assets/img/skills/html.svg' },
  { name: 'CSS', icon: 'assets/img/skills/css.svg' },
  { name: 'JavaScript', icon: 'assets/img/skills/javascript.svg' },
  { name: 'TypeScript', icon: 'assets/img/skills/typescript.svg' },
  { name: 'Angular', icon: 'assets/img/skills/angular.svg' },
  { name: 'Git', icon: 'assets/img/skills/git.svg' },
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
  protected languageService = inject(LanguageService)

  skills = skills
  content = computed(() => skillsContent[this.languageService.language()])

}
