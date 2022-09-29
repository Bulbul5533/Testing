import { Component, OnInit,ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @ViewChild(HeaderComponent,{static:true})btnheader!:HeaderComponent
  
  ngOnInit(): void {
  }

}
