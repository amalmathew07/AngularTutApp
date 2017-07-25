import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css','./logincss1.css','./logincss2.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogincomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
