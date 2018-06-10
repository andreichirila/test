import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OptionsBoxModule } from './options-box-module/options-box-module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OptionsBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
