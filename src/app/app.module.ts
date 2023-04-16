import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function createTranslationLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'config/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader:{provide: TranslateLoader, useFactory: createTranslationLoader, deps: [HttpClient]}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
