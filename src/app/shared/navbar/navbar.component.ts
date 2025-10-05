import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentLang = this.languageService.getCurrentLanguage();
  isMenuOpen = false;

  constructor(
    public router: Router,            // wichtig: public fürs Template
    private languageService: LanguageService
  ) {}

  toggleMenu(event: Event) { event.stopPropagation(); this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }

  onMenuItemClick(sectionId: string) { this.navigateToSection(sectionId); this.closeMenu(); }

  navigateToSection(sectionId: string) {
    if (this.router.url === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/']).then(() =>
        setTimeout(() =>
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100
        )
      );
    }
  }

  useLanguage(lang: 'en' | 'de') {
    this.languageService.setLanguage(lang);
    this.currentLang = lang;
  }

  goToStartpage() { this.router.navigate(['/']); }
}
