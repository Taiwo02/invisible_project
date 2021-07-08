import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotTableModule } from '@handsontable/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HotTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => { console.error(err) });
