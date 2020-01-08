import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.page.html',
  styleUrls: ['./invoice-page.page.scss'],
})
export class InvoicePagePage implements OnInit {
  cartItems = [];
  totalAmount :any;
  card :boolean = false;
  cod:boolean = false;
  data : any ;
  oneItem :any ; 
  qty = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
      if(params && params.single){
        this.oneItem = JSON.parse(params.single);
      }
    });
    
  }

  ngOnInit() {
    console.log('this.one', this.oneItem);
    
   
  }
  ionViewWillEnter() {
    if(JSON.parse(localStorage.getItem('singleItem'))){
      this.singleItem();
    } else{
      this.cartitem();
    }
    this.qty = this.cartItems.length;

}

  singleItem(){
    this.cartItems = [];
    // console.log('this.one', this.oneItem);
    this.cartItems.push(JSON.parse(localStorage.getItem('singleItem')));
    this.totalAmount = 0 ;
    this.cartItems.map((item)=>{
      item.productQuantity = 1;
      this.totalAmount = this.totalAmount + item.price;
    })
    console.log("back from all cartItems", this.cartItems);

  }
  cartitem(){
    console.log("back from all address", this.data);
    let a = [];

    if (!JSON.parse(localStorage.getItem('products'))) {

    } else {
      this.totalAmount = 0;
      a = JSON.parse(localStorage.getItem('products'));
      a.map((item)=>{
        item.productQuantity = 1;
        this.totalAmount = this.totalAmount + item.price;
      })
      console.log('adata', a);
    }
    
    localStorage.setItem('products', JSON.stringify(a));
    this.cartItems = a;
    console.log('cartItems', this.cartItems);
    console.log('this.totalAmount',this.totalAmount);
  }

  viaCard(){
    this.card = true;
    this.cod = false;
  }

  cashOnDelivery(){
    this.card = false;
    this.cod = true;
  }

  chengeAddress(){
    this.router.navigate(['all-address']);
  }

  goToHome(){
    if(this.data){
      this.router.navigate(['order-success']);
    } else{
      this.presentAlert();
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please add Address',
     
      buttons: ['OK']
    });

    await alert.present();
  }
}
// /usr/lib/jvm/java-1.8.0-openjdk-amd64