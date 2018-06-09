import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsBoxComponent } from './options-box/options-box.component';
import { OptionsBoxEditFileComponent } from './options-box-edit-file/options-box-edit-file.component';
import { OptionsBoxNewFileComponent } from './options-box-new-file/options-box-new-file.component';
import { OptionsBoxNewFolderComponent } from './options-box-new-folder/options-box-new-folder.component';
import { OptionsBoxDeleteComponent } from './options-box-delete/options-box-delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OptionsBoxComponent, OptionsBoxEditFileComponent, OptionsBoxNewFileComponent, OptionsBoxNewFolderComponent, OptionsBoxDeleteComponent]
})
export class OptionsBoxModuleModule { }
