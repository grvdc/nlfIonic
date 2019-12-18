import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from '../../../node_modules/firebase';

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
  products = [
    {
      id: 1,
      img: 'https://rukminim1.flixcart.com/image/332/398/jpcxrww0/jacket/k/g/7/m-39238-fkpeach-breil-by-fort-collins-original-imafbmhctz6mag3k.jpeg?q=50',
      price: 25
    },
    {
      id: 2,
      img: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1010442/2015/10/5/11444041872433-Belle-Fille-Red-Jacket-7721444041872016-1.jpg',
      price: 25
    },
    {
      id: 3,
      img: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1010442/2015/10/5/11444041872433-Belle-Fille-Red-Jacket-7721444041872016-1.jpg',
      price: 25
    },
    {
      id: 4,
      img: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1010442/2015/10/5/11444041872433-Belle-Fille-Red-Jacket-7721444041872016-1.jpg',
      price: 25
    }
  ]
  constructor(
    private menu: MenuController,
    private router: Router,
    public platform: Platform
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

  test(){
    console.log("working focus searchbar")
  }

}
