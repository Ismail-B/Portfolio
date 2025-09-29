import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// Minimaler JSON-Loader: lädt ./assets/i18n/<lang>.json
export function httpJsonLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation(lang: string): Observable<any> {
      return http.get<any>(`./assets/i18n/${lang}.json`);
    }
  };
}

export const provideTranslation = () =>
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpJsonLoaderFactory,
        deps: [HttpClient],
      }
    })
  );
