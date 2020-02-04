import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {
  cartItems = [];
  rate = 4;
  skeleton: boolean = true;
  totalAmount: any;
  productQuantity: any;

  login = '';
  address = [];
  clientAddress = [];
  dummyTotal = 0;
  id:any;
  animationClass= "";
  @Output() cartCount: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.skeleton = false;
    }, 1200)
    let a = [];

    if (!JSON.parse(localStorage.getItem('products'))) {

    } else {
      this.totalAmount = 0;
      a = JSON.parse(localStorage.getItem('products'));
      a.map((item) => {
        item.productQuantity = 1;
        this.totalAmount = this.totalAmount + item.price;
      })
      console.log('adata', a);
    }

    localStorage.setItem('products', JSON.stringify(a));
    this.cartItems = a;
    console.log('cartItems', this.cartItems);
  }

 
  indexFinding(index) {
    this.totalAmount = 0;
    this.cartItems.splice(index, 1);
    this.cartCount.emit(this.cartItems.length);
    this.cartItems.map((item) => {
      let newamt = 0;
      item.productQuantity ? newamt = item.productQuantity * item.price : this.totalAmount + item.price;
      this.totalAmount = this.totalAmount + newamt;
    })
    localStorage.setItem('products', JSON.stringify(this.cartItems));
  }

  addQty(item, index) {
    console.log(" this.cartItems[index]", this.cartItems[index]);
    item.productQuantity ? item.productQuantity = item.productQuantity + 1 : item.productQuantity = 1;
    item.total ? item.total = item.total + item.price : item.total = item.price;

    this.cartItems[index]['productQuantity'] = item.productQuantity;
    this.totalAmount = 0;
    this.cartItems.map((item) => {
      let newamt = 0;
      item.productQuantity ? newamt = item.productQuantity * item.price : this.totalAmount + item.price;
      this.totalAmount = this.totalAmount + newamt;
    })
  }

  removeQty(item, index) {
    console.log(" this.cartItems[index]", this.cartItems[index]);

    let total= 0;
    item.productQuantity ? item.productQuantity = item.productQuantity - 1 : item.productQuantity = 0;
    this.cartItems[index]['productQuantity'] = item.productQuantity;
    item.total ? total = item.productQuantity * item.price : total = item.productQuantity * item.price;
    item.total = total;
    this.totalAmount = 0;
    this.cartItems.map((item) => {
      let newamt = 0;

      item.productQuantity ? newamt = item.productQuantity * item.price : this.totalAmount + item.price;
      this.totalAmount = this.totalAmount + newamt;
    })
  }

  wishlist(item, index) {
    console.log(" this.cartItems[index]", this.cartItems[index]);
    item.wish ? item.wish = !item.wish : item.wish = true;
    this.cartItems[index]['wish'] = item.wish;
    localStorage.setItem('products', JSON.stringify(this.cartItems));
  }

  checkOutPage() {
    localStorage.removeItem("singleItem");
    this.login = localStorage.getItem("login");
    this.address = JSON.parse(localStorage.getItem('address'));
    if (this.address) {
      this.address.filter((item) => {
        if (item.email == this.login) {
          this.clientAddress = item.address;
        }
      })
      if (this.clientAddress.length > 0) {
        this.router.navigateByUrl('/all-address');
      } else {
        this.router.navigateByUrl('/address-screen');
      }
    } else {
      this.router.navigateByUrl('/address-screen');
    }


  }

  test() {
    console.log("tetsingClick");
  }

  goToProductDetailPage(id) {
    console.log('datatttt', id);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id),
        fromCart: true,
      }
    };
    this.router.navigate(['product-detail-page'], navigationExtras);
  }



  // Demo Cart Start
  ionViewWillEnter(){
    this.cartItems.map((item) => {
      let total = 0;
      let newamt= 0;
      item.total ? total = item.productQuantity * item.price : total = item.productQuantity * item.price;
      item.productQuantity ? newamt = item.productQuantity * item.price : this.totalAmount + item.price;
      this.totalAmount = this.totalAmount + newamt;
      item.total = total;
    })
    this.id = setInterval(() => this.anitest(),100);
    console.log("new Cart", this.cartItems)
  }
  anitest(){
    let t = 700;
    let r = t/10;
    // this.dummyTotal   
    if(this.dummyTotal < 699){
      this.dummyTotal = this.dummyTotal + r;
    
    } else{
      clearInterval(this.id);
      this.animationClass = "pulse";
    }
  }

  //Demo cart End
}
