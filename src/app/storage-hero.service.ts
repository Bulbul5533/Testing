import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageHeroService {

  constructor() { }
  card_Details: any = []

  Storedata(card:any)
  {

    this.card_Details = card
    //console.log('service',this.card_Details)
   
  }

  rtnData()
  {
    return this.card_Details
  }
}
