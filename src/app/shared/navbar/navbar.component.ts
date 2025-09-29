import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

/* 🔹 Navbar component */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLang = this.languageService.getCurrentLanguage();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  /* 🔹 Smooth scroll to section (on homepage) */
  navigateToSection(sectionId: string) {
    if (this.router.url === '/') {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/']).then(() =>
        setTimeout(
          () =>
            document
              .getElementById(sectionId)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
          100
        )
      );
    }
  }

  /* 🔹 Switch language (EN / DE) */
  useLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
    this.currentLang = lang;
  }
}
