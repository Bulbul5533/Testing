import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  txtSearched: string = ''

  @Output()
  emitSearchedTxt: EventEmitter<string> = new EventEmitter<string>()

  Autochange() {
    // console.log('from search', this.txtSearched)
    return this.emitSearchedTxt.emit(this.txtSearched)
  }

}
