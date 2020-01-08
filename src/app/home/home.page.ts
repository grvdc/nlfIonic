import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import * as firebase from '../../../node_modules/firebase';
import {products } from '../tsFiles/products';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  infos = [];
// ref = firebase.database().ref('infos/');
  searchtext='';
  skeletonText: boolean = true;
  segmentWidth= 'segmentWidth';
  searchInput:boolean = false;
  search:boolean = false;
  cartBadge = 0;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    loop: true,
  };
  slide = [
    { id: 1, image: 'https://freedesignfile.com/upload/2016/12/Shopping-woman-with-bank-card-OK-HD-picture.jpg' },
    { id: 2, image: 'https://freedesignfile.com/upload/2017/06/Expression-cheerful-shopping-woman-Stock-Photo.jpg' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vC8fUj8ZWXkPvzLdsJlyKauSauCoiKxa0RBgTmQNxDAgqu7O&s' },
  ];
  products= products.jackets;
  
  constructor(
    private menu: MenuController,
    private router: Router,
    public platform: Platform,
    private auth : AuthService,
    public toastController: ToastController,
  ) {
    this.menu.enable(true);
    this.platform.backButton.subscribe(() => {
      console.log("testbk");
    });
    let data = [];
    data = JSON.parse(localStorage.getItem('products'));
    if(!data){
      this.cartBadge = 0;
    } else{
      this.cartBadge = data.length;
    }
  }
  ngOnInit() {
    
   
    this.skeletonText = true;
    this.menu.enable(true, 'custom');
    setTimeout(() => {
      this.onetwo();
    }, 3000)
  }
  openmenu() {
    this.menu.open();

  }
  logout() {
    localStorage.removeItem("login");
    this.router.navigateByUrl('/login-page');
  }

  onetwo() {
    this.skeletonText = !this.skeletonText;
  }

  ionViewWillEnter() {
    this.auth.tesApi().subscribe(data=>{
      console.log("data.result",data);
      })
    let login = localStorage.getItem("login");
    if (!login) {
      this.router.navigateByUrl('/login-page');
    } else{
      let a = [];
      a = JSON.parse(localStorage.getItem('products'));
      this.cartBadge = a?a.length:0;
    }
   
}
  addToCart(data) {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    let a = [];
    if (!JSON.parse(localStorage.getItem('products'))) {
      a.push(data);
    } else {
      a = JSON.parse(localStorage.getItem('products'));
      a.push(data)
    }
    console.log('a', a);
    localStorage.setItem('products', JSON.stringify(a));
    this.cartBadge = a.length;
  }

  showSearch(){
    this.searchtext='';
    this.search = !this.search;
    console.log("search",this.search);
    if(this.search){
      this.searchInput = !this.searchInput;
    }else{
      setTimeout(() => {
        this.searchInput = !this.searchInput;
      }, 1900)
    }
   
  }
  wishlist(id){
    products.jackets.map((item)=>{
      if(item.id == id){
        item['wish'] ? item['wish']=!item['wish'] : item['wish']=true;
      }
      if(item['wish']){
        this.presentToast();
      }
    })

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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item saved to wishlist.',
      duration: 2000,
      // color: 'light',
      animated :true,
    });
    toast.present();
  }

}
