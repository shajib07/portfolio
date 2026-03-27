import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-imprint',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class ImprintComponent {}
