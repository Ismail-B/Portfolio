import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

/* === JSON Translation Loader === */
export function httpJsonLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation(lang: string): Observable<any> {
      return http.get<any>(`./assets/i18n/${lang}.json`);
    }
  };
}

/* === Translation Provider === */
export const provideTranslation = () =>
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpJsonLoaderFactory,
        deps: [HttpClient]
      }
    })
  );
