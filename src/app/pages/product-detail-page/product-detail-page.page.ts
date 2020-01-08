import { Component, OnInit , ViewEncapsulation, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {products } from '../../tsFiles/products';
import { IonContent } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.page.html',
  styleUrls: ['./product-detail-page.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProductDetailPagePage implements OnInit {
  // @ViewChild(IonContent) content: IonContent;
  products = products.jackets;
  data: any;
  productImages =[];
  product :any;
  rate = 4;
  cartBadge=0;
  qty = "1" ;
  size = ['S','M', 'L', 'XL'];
  constructor(private route: ActivatedRoute, private router: Router,
    public toastController: ToastController
    ) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
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
    products.jackets.map((item)=>{
      if(this.data === item.id){
        this.product = item;
        item.productimages.map((newitem)=>{
          this.productImages.push(newitem);
        })

      }
    })

  }

  onModelChange(event){
    console.log(event);
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

  addToCart(data) {
    // this.menu.enable(true, 'first');
    // this.menu.open('first');
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

  sendToInvoicePage(){
    console.log("daatatat",this.product);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        single: JSON.stringify(this.product)
      }
    };
    this.product['qty'] = parseInt(this.qty);
    
    localStorage.setItem('singleItem', JSON.stringify(this.product));
    this.router.navigate(['address-screen']);
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
  // ScrollToTop(){
  //   this.content.scrollToTop(1500);
  // }
}
