import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {products } from '../../tsFiles/products';

@Component({
  selector: 'app-shop-bycaegorie',
  templateUrl: './shop-bycaegorie.page.html',
  styleUrls: ['./shop-bycaegorie.page.scss'],
})
export class ShopBycaegoriePage implements OnInit {
  products = products.jackets;
  data: any;
  productDisplay =[];
  showError = false;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
    console.log("this.data",this.data);
    products.jackets.map((item)=>{
      // if(this.data === item.womenJackets){
        // this.productDisplay.push(item);
        console.log("this.productDisplay",item.jacketType);

      // }
    })
    

  }

  ngOnInit() {
    products.jackets.map((item)=>{
      if(this.data === item.jacketType){
        this.productDisplay.push(item);
        console.log("this.productDisplay",item.jacketType);

      }
    })
    console.log("this.data",this.data);
    if(this.productDisplay.length === 0 ){
      this.showError = true;
    } else{
      this.showError = false;
    }

  }

  goToProductDetailPage(id) {
    console.log('datatttt',id);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    };
    this.router.navigate(['product-detail-page'], navigationExtras);
  }

  addToCart(data) {
 
    let a = [];
    if (!JSON.parse(localStorage.getItem('products'))) {
      a.push(data);
    } else {
      a = JSON.parse(localStorage.getItem('products'));
      a.push(data)
    }
    console.log('a', a);
    localStorage.setItem('products', JSON.stringify(a));
  }
}
