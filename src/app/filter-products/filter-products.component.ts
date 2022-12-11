import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {

  @Input() All: number = 0
  @Input() Mobile: number = 0
  @Input() HeadPhone: number = 0
  @Input() Powerbank: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  btnRadioChosen: string = 'All'


  filtertext: string = 'All'
  @Output()
  filtertxt: EventEmitter<string> = new EventEmitter<string>()
  //
  RaisingEvent()
  {
    return this.filtertxt.emit(this.filtertext)
  }
}
