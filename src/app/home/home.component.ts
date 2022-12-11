import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadCitydata } from 'LoadCitydata';
import { StorageHeroService } from '../storage-hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shoptocarditems: any = []
  constructor(public loaddata: LoadCitydata,public MyService:StorageHeroService) { }


  ngOnInit(): void {
    localStorage.clear()

  }
  Product = this.loaddata.GetProductdata()

  // sharedata:EventEmitter<any>=new EventEmitter<any>()

  // ShopShare()
  // {
  //   return this.sharedata.emit(this.shoptocarditems)
  // }

  watchingvalues() {
    return this.shoptocarditems.length
  }

  Addtocart(Productdata: any) {
    this.shoptocarditems.push(Productdata)
   // console.log('card Products',this.shoptocarditems)
    this.MyService.Storedata(this.shoptocarditems)

  }

  Notify(product: any) {
    var Customer_Mail_ID = prompt("Please enter your Mail id")

    const atpostion = Customer_Mail_ID?.indexOf("@")
    if (Customer_Mail_ID === null || Customer_Mail_ID === "") {
      alert("Please enter the Mail ID")
    }
    else {
      console.log(product)
      console.log(Customer_Mail_ID)

    }
  }
  //Starting Share data for Filter Component(Child)

  returnAllProductcount() {
    return this.Product.length
  }

  returnMobileCount() {
    return this.Product.filter(Mobile => Mobile.SubCategory === 'Mobile').length
  }
  returnHeadPhoneCount() {
    return this.Product.filter(Headphone => Headphone.SubCategory === 'HeadPhone').length
  }
  returnPowerbankCount() {
    return this.Product.filter(Bank => Bank.SubCategory === 'Powerbank').length
  }
  // End of data share for Filter Component

  // start of Filtered text apply
  filteredtxt: string = ''
  filteredtextevent(data: string) {
    this.filteredtxt = data
    console.log('filteredtxt', this.filteredtxt)
  }
  // End of Filtered text apply

  SearchedTxt: string = ''
  SearchEvent(data1: string) {
    this.SearchedTxt = data1
    //console.log('searched', this.SearchedTxt)
  }
}
