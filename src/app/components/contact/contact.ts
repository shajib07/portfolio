import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in';

type Lang = 'en' | 'de';

type ContactContent = {
  heading: string;
  subheading: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  privacy: string;
  submit: string;
  successMessage: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  privacyRequired: string;
};

const contactContent: Record<Lang, ContactContent> = {
  en: {
    heading: 'Contact Me',
    subheading: 'Have a project in mind? Let\'s talk.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    privacy: 'I have read and accept the Privacy Policy.',
    submit: 'Send Message',
    successMessage: 'Thank you! Your message has been sent.',
    nameRequired: 'Name is required.',
    emailRequired: 'Email is required.',
    emailInvalid: 'Please enter a valid email address.',
    messageRequired: 'Message is required.',
    privacyRequired: 'You must accept the privacy policy.'
  },
  de: {
    heading: 'Kontakt',
    subheading: 'Hast du ein Projekt? Schreib mir.',
    namePlaceholder: 'Dein Name',
    emailPlaceholder: 'Deine E-Mail',
    messagePlaceholder: 'Deine Nachricht',
    privacy: 'Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.',
    submit: 'Nachricht senden',
    successMessage: 'Danke! Deine Nachricht wurde gesendet.',
    nameRequired: 'Name ist erforderlich.',
    emailRequired: 'E-Mail ist erforderlich.',
    emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    messageRequired: 'Nachricht ist erforderlich.',
    privacyRequired: 'Du musst die Datenschutzerklärung akzeptieren.'
  }
};

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FadeInDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private languageService = inject(LanguageService);

  content = computed(() => contactContent[this.languageService.language()]);
  submitted = signal(false);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue)
  });

  get nameControl() { return this.form.get('name')!; }
  get emailControl() { return this.form.get('email')!; }
  get messageControl() { return this.form.get('message')!; }
  get privacyControl() { return this.form.get('privacy')!; }

  sendMessage(): void {
    if (this.form.invalid) return;
    this.submitted.set(true);
    this.form.reset();
  }
}
