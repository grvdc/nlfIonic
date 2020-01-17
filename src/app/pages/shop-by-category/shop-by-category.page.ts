import { Component, OnInit } from '@angular/core';
import { products } from '../../tsFiles/products'
@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.page.html',
  styleUrls: ['./shop-by-category.page.scss'],
})
export class ShopByCategoryPage implements OnInit {

  products = products.baby;
  
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  sliderThree:any;
  constructor() { 
  }

  ngOnInit() {
  }

  test(data){
    
  }

}
