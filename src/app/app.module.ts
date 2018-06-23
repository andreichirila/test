import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OptionsBoxModule } from './options-box-module/options-box-module';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    OptionsBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
