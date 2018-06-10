import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-box-new-folder',
  templateUrl: './options-box-new-folder.component.html',
  styleUrls: ['./options-box-new-folder.component.scss']
})
export class OptionsBoxNewFolderComponent implements OnInit {

  public toggleInput: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleInputElement() {
    return this.toggleInput = !this.toggleInput;
  }
}
