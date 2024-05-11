import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      TranslateModule.forRoot(translateModuleConfig)
    ),
  ],
};
