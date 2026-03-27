import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { SkillsComponent } from '../../components/skills/skills';
import { ProjectsComponent } from '../../components/projects/projects';
import { ContactComponent } from '../../components/contact/contact';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
