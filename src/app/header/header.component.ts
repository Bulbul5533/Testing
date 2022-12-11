import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() itemscount: number = 0


  isVisible: boolean = false
  loginhide: boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  disableAgent() {
    return this.isVisible = true
  }
  disableButtonlogin()
  {
    return this.loginhide = true
  }


}
