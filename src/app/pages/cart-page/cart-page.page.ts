import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {
  cartItems = [];
  constructor(
       private router: Router,
  ) { 
   
  }

  ngOnInit() {
    let a = [];

    if (!JSON.parse(localStorage.getItem('products'))) {

    } else {
      a = JSON.parse(localStorage.getItem('products'));
      console.log('adata', a);
    }
    
    localStorage.setItem('products', JSON.stringify(a));
    this.cartItems = a;
    console.log('cartItems', this.cartItems);
  }

  indexFinding(index){
    this.cartItems.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.cartItems));
  }
}
