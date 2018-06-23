import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public fileToUpload: File = null;

  constructor() { }

  ngOnInit() {
  }

  public handleFileInput(files) {
    console.log(files);
  }

}
