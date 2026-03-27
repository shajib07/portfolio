import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class PrivacyComponent {}
