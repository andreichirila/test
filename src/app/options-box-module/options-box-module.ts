import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { OptionsBoxComponent } from './options-box/options-box.component';
import { OptionsBoxEditFileComponent } from './options-box-edit-file/options-box-edit-file.component';
import { OptionsBoxNewFileComponent } from './options-box-new-file/options-box-new-file.component';
import { OptionsBoxNewFolderComponent } from './options-box-new-folder/options-box-new-folder.component';
import { OptionsBoxDeleteComponent } from './options-box-delete/options-box-delete.component';

const components = [
  OptionsBoxComponent, 
  OptionsBoxEditFileComponent, 
  OptionsBoxNewFileComponent, 
  OptionsBoxNewFolderComponent, 
  OptionsBoxDeleteComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [components],
  exports: [OptionsBoxComponent]
})
export class OptionsBoxModule { }
