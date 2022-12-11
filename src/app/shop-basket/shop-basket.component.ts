import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StorageHeroService } from '../storage-hero.service';

@Component({
  selector: 'app-shop-basket',
  templateUrl: './shop-basket.component.html',
  styleUrls: ['./shop-basket.component.css']
})
export class ShopBasketComponent implements OnInit {

  constructor(private element: ElementRef,public service:StorageHeroService) { }

  

  @Input() colleteddata: any = []
  @ViewChild(HeaderComponent, { static: true }) hello!: HeaderComponent

  Product:any
  selected:any='1'
  Teststorage:any

  ngOnInit(): void {

    this.Product= this.service.rtnData()
    console.log('From Shopping card',this.Product)
    
  }


  // Product = [
  //   {
  //     ProductName: "APPLE IPhone",
  //     Category: "Electronic",
  //     SubCategory: "Mobile",
  //     Price: "2000",
  //     ProductDesc: "120 Hz Display,256GB Internal Memory",
  //     ProductImage: "../assets/Products/iphone.jpg",
  //     Status: "Available"   
  //   },
  //   {
  //     ProductName: "APPLE IPhone",
  //     Category: "Electronic",
  //     SubCategory: "Mobile",
  //     Price: "2000",
  //     ProductDesc: "120 Hz Display,256GB Internal Memory",
  //     ProductImage: "../assets/Products/iphone.jpg",
  //     Status: "Available"
  //   },
  //   {
  //     ProductName: "APPLE IPhone",
  //     Category: "Electronic",
  //     SubCategory: "Mobile",
  //     Price: "2000",
  //     ProductDesc: "120 Hz Display,256GB Internal Memory",
  //     ProductImage: "../assets/Products/iphone.jpg",
  //     Status: "Available"
  //   },
  // ]

}
