import { Component, OnInit } from '@angular/core';
import { products } from '../../tsFiles/products';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  products =[];
  listView:boolean = false;
  totalItem=0;
  id:any;
  testProductDetail = {
    id: 1,
    img: 'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvgprxsvsb.jpeg?q=50',
    price: 25,
    jacketType: 'womenJackets',
    headerType:'Women Jacket',
    title:'Full Sleeve Solid Women Jacket',
    discription: 'A jacket is a mid-stomach–length garment for the upper body. A jacket typically has sleeves.',
    rate:3,
    productimages:[
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvkjh5rm52.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvgprxsvsb.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvmkhggq3f.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/714/857/k47cgi80/jacket/e/z/k/s-58452101-puma-original-imafn2dvzw8nfhnw.jpeg?q=50',
    ]
  }
  testData = [
    {
      category: 'Event',
      categoryList: [{
        name: 'Gaurav',
        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      },
      {
        name: 'MahiPal',
        image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      },]
    },
    {
      category: 'Sports',
      categoryList: [{
          name:'Seema',
          image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
        },
        {
          name:'Rahul',
          image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
        }]

    }
  ]
  public searchTerm: string = "";
  public items: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // products.jackets.map((item)=>{
    //   if(item['wish']){
    //     this.products.push(item);
    //   }
    // });

    
  }
  ionViewWillEnter() {
    this.totalItem = this.products.length;
    this.toggleListView()
  }

  setFilteredItems() {
    console.log("search string", this.searchTerm);
  // let data:any;
  // data = this.testData.filter(item => {
  //    return item.category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
  //   });
  //   console.log("data",data);
  //   this.testData = data;
  //   console.log("search string", this.testData);
  }

  addToCart(data) {
   console.log("datattpaddcart",data)
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
  
  wishlist(id){
    console.log("datattpaddcart id",id)
    products.jackets.map((item)=>{
      if(item.id == id){
        item['wish'] ? item['wish']=!item['wish'] : item['wish']=true;
      }
    })
    this.products = this.products.filter(item => item.id !== id);
  }
  
  toggleListView(){
    this.products=[];
    this.id = setInterval(() => this.anitest(),300);
    this.listView = !this.listView;
   
  }
  anitest(){
    let length = this.products.length;
    let newProd = [];
    products.jackets.map((item)=>{
     if(!item['wish']){
       newProd.push(item);
     }
   });
   this.totalItem = newProd.length;

     if(newProd.length != length){
       this.products.push(newProd[length]);
       console.log("push")
     } else{
       clearInterval(this.id);
     }
     
  }

  testDetail() {
    console.log('datatttt',this.testProductDetail);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        testProductDetail: JSON.stringify(this.testProductDetail)
      }
    };
    this.router.navigate(['product-detail-page'], navigationExtras);
  }
}
