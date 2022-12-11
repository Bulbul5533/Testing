import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild(HeaderComponent, { static: true }) btnheader!: HeaderComponent

  Groupdata = this.fb.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    Date: ['', Validators.required],
    Gender: [' ', Validators.required],
    Mobile: ['', Validators.required],
    Password: ['', Validators.required],

  })
 
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  btnSubmit() {
    console.log('value',this.Groupdata.value)
  }
}
