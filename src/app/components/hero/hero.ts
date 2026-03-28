import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-hero',
  imports: [FadeInDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  protected languageService = inject(LanguageService)
}
