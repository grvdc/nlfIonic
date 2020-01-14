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
  category: any;
  categoryOptions = {
    initialSlide: 0,
    slidesPerView: 4
  };
  dealsOptions = {
    initialSlide: 0,
    slidesPerView: 2.1
  };
  dealOfthe =  {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: [
      {
        id: 1,
        image: 'https://rukminim1.flixcart.com/image/496/595/k45x0nk0/top/r/9/m/xxl-dn-kt68-duenite-original-imafn4xfa2ymgj25.jpeg?q=50',
        category: 'Apparel & Accessories'
      },
      {
        id: 2,
        image: 'https://rukminim1.flixcart.com/image/309/371/k0e66q80/top/4/g/h/l-68tk2164-selvia-original-imafk75pzns52zfv.jpeg?q=50',
        category: 'Electronics'
      },
      {
        id: 3,
        image: 'https://rukminim1.flixcart.com/image/496/595/k3dc7m80/top/x/u/x/xl-aan055maroon-aania-original-imafmh9teu9wxeph.jpeg?q=50',
        category: 'Home Appliances'
      },
      {
        id: 4,
        image: 'https://rukminim1.flixcart.com/image/496/595/k1fbmvk0pkrrdj/top/f/h/x/l-74tkj2235-l-siril-original-imafh36aebe45ntt.jpeg?q=50',
        category: 'All Categories'
      },
     
    ]
  };


  footwearOptions = {
    initialSlide: 0,
    slidesPerView: 2.1
  };
  
  footwear =  {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: [
      {
        id: 1,
        image: 'https://rukminim1.flixcart.com/image/309/371/k3ncakw0/sandal/4/n/a/jk-0035-7-shopiee-black-original-imafgbgwzbwxhsgz.jpeg?q=50',
        category: 'Footwear'
      },
      {
        id: 2,
        image: 'https://rukminim1.flixcart.com/image/309/371/js4yljk0/sandal/7/g/a/ls-2332-41-london-steps-copper-original-imafdr8efjehvp3j.jpeg?q=50',
        category: 'Electronics'
      },
      {
        id: 3,
        image: 'https://rukminim1.flixcart.com/image/309/371/k1xwcy80/sandal/5/r/x/13542-37-rindas-black-original-imafhehjhjh6dbk7.jpeg?q=50',
        category: 'Home Appliances'
      },
      {
        id: 4,
        image: 'https://rukminim1.flixcart.com/image/309/371/ja48osw0/sandal/k/m/z/ls-2331-43-london-steps-golden-original-imaexk2jpgdcwhze.jpeg?q=50',
        category: 'All Categories'
      },
     
    ]
  };
  constructor(
    private menu: MenuController,
    private router: Router,
    public platform: Platform,
    private auth : AuthService,
    public toastController: ToastController,
  ) {


    this.category =  {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          { id: 11,image: 'https://ae01.alicdn.com/kf/HTB1ydBaPFXXXXXNXXXXq6xXFXXXc/Women-Clothes-Brief-Party-Pencil-Midi-Dress-UK-Women-Ladies-Clothing-Dresses-Bandage-Bodycon.jpg',
            category: 'Clothing'
          },
          { id: 12,image: 'assets/electronics.png',
            category: 'Mobile & Accessories'
          },
          { id: 13,image: 'assets/homeappliance.png',
            category: 'Home & kitchen'
          },
          {
            id: 14,
            image: 'assets/list.png',
            category: 'All Categories'
          },
          // {
          //   id: 15,
          //   image: 'https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/jacket/e/r/r/s-metro-j025-grey-metronaut-original-imafhaynz2qyxzhz.jpeg?q=50'
          // }
        ]
      };
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
    console.log("testtoggle");
    // this.menu.open();
    this.menu.toggle(); 

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
      // this.router.navigateByUrl('/login-page');
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

  test(data){
   
  }

  goToAllCategories(data){
    console.log("test categories", data);
    if(data.id == 14){
      this.router.navigateByUrl('/all-categories');
    }
    
   
  }
  
}
