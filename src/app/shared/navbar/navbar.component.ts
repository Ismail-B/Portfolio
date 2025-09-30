import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

/**
 * ===============================
 * Navbar Component
 * ===============================
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  /** Current active language */
  currentLang = this.languageService.getCurrentLanguage();

  /** Mobile menu state */
  isMenuOpen = false;

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  /** Toggle hamburger menu */
  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** Close hamburger menu */
  closeMenu() {
    this.isMenuOpen = false;
  }

  /** Handle click on a menu item */
  onMenuItemClick(sectionId: string) {
    this.navigateToSection(sectionId);
    this.closeMenu();
  }

  /** Smooth navigation to section (homepage aware) */
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

  /** Switch app language */
  useLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
    this.currentLang = lang;
  }
}
