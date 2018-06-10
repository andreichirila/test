import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-options-box',
  templateUrl: './options-box.component.html',
  styleUrls: ['./options-box.component.css']
})
export class OptionsBoxComponent implements OnInit {

  nodeUrl = "http://localhost:8000/";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.nodeUrl).subscribe(res=>console.log(res));
  }

}
