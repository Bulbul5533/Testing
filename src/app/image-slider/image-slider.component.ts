import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
 images = [  
    { img: "../assets/image/1.jpg" },  
    { img: "../assets/image/2.jpg" },  
    { img: "../assets/image/3.jpg" },  
    { img: "../assets/image/4.jpg" },  
    { img: "../assets/image/5.jpg" },  
    { img: "../assets/image/6.jpg" },  
    { img: "../assets/image/7.jpg" },  
    { img: "../assets/image/8.jpg" },  
    { img: "../assets/image/9.jpg" },  
    { img: "../assets/image/10.jpg" },  
    { img: "../assets/image/11.jpg" },  
  ];  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };

  constructor() { }

  ngOnInit(): void {
  }

}
