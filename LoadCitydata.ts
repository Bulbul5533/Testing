import { Injectable } from "@angular/core";



@Injectable()

export class LoadCitydata {

      Products = [
        {
            ProductName: "APPLE IPhone",
            Category: "Electronic",
            SubCategory: "Mobile",
            Price: "2000",
            ProductDesc: "120 Hz Display,256GB Internal Memory",
            ProductImage: "../assets/Products/iphone.jpg",
            Status: "Available"
        },
        {
            ProductName: "OnePlus_10R",
            Category: "Electronic",
            SubCategory: "Mobile",
            Price: "1500",
            ProductDesc: "120 Hz Display,256GB Internal Memory",
            ProductImage: "../assets/Products/oneplus.jpg",
            Status: "Available"
        },
        {
            ProductName: "OPPO",
            Category: "Electronic",
            SubCategory: "Mobile",
            Price: "1000",
            ProductDesc: "120 Hz Display,256GB Internal Memory",
            ProductImage: "../assets/Products/oppo.jpg",
            Status: "Available"
        },
        {
            ProductName: "Vivo",
            Category: "Electronic",
            SubCategory: "Mobile",
            Price: "1100",
            ProductDesc: "120 Hz Display,256GB Internal Memory",
            ProductImage: "../assets/Products/oppo.jpg",
            Status: "NotAvailable"
        },
        {
            ProductName: "RealMe Powerbank",
            Category: "Accessories",
            SubCategory: "Powerbank",
            Price: "500",
            ProductDesc: "10000 MaH",
            ProductImage: "../assets/accessories/RealMe_power-bank.jpg",
            Status: "Available"
        },
        {
            ProductName: "Sony Boom",
            Category: "Accessories",
            SubCategory: "HeadPhone",
            Price: "500",
            ProductDesc: "",
            ProductImage: "../assets/accessories/sony_boom.jpg",
            Status: "Available"
        },

    ]
    GetProductdata() {
        return this.Products;
    }


}