import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslation } from './translate.config';
import { TranslateService } from '@ngx-translate/core';

function initLanguage(translate: TranslateService) {
  return () => {
    const saved = localStorage.getItem('lang') || 'en';
    translate.addLangs(['en', 'de']);
    // setDefaultLang = Anzeige, falls ein Key fehlt
    translate.setDefaultLang('en');
    // aktive Sprache auf die gespeicherte setzen
    translate.use(saved);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslation(),
    {
      provide: APP_INITIALIZER,
      deps: [TranslateService],
      useFactory: initLanguage,
      multi: true,
    },
  ],
};
