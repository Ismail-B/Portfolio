import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) {}

  // --- Set Language & Save to LocalStorage ---
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  // --- Get Current Language (Translate > LocalStorage > Default > 'en') ---
  getCurrentLanguage(): string {
    return (
      this.translate.currentLang ||
      localStorage.getItem('lang') ||
      this.translate.getDefaultLang() ||
      'en'
    );
  }
}
