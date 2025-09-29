import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslation } from './translate.config';
import { TranslateService } from '@ngx-translate/core';

/* === Language Initialization === */
function initLanguage(translate: TranslateService) {
  return () => {
    const saved = localStorage.getItem('lang') || 'en';
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en'); // fallback if key is missing
    translate.use(saved); // use saved or default language
  };
}

/* === App Configuration === */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslation(),
    {
      provide: APP_INITIALIZER,
      deps: [TranslateService],
      useFactory: initLanguage,
      multi: true
    }
  ]
};
