import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-all-address',
  templateUrl: './all-address.page.html',
  styleUrls: ['./all-address.page.scss'],
})
export class AllAddressPage implements OnInit {
  login = '';
  address = [];
  clientAddress = [];
  aa = [];
  loaderToShow: any;

  constructor(
    private router: Router,
    public loadingController: LoadingController
  ) {
    
   }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    
    this.reload();
    if(this.clientAddress.length ==0){
      this.router.navigate(['address-screen']);
    }
}

reload(){
  
  this.login = localStorage.getItem("login");
    this.address = JSON.parse(localStorage.getItem('address'));
    this.address.filter((item)=>{
      if(item.email == this.login){
        this.clientAddress = item.address;
        // console.log("Address", item);
      }
    })
    console.log('cleintaddress',this.clientAddress);

}
  sendBacktoInvoice(data) {
    console.log('selected Address', data);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };
    this.router.navigate(['invoice-page'], navigationExtras);
  }

  addAddress(){
    this.router.navigate(['address-screen']);
  }

  remove(index){
    this.clientAddress.splice(index, 1);
    this.address.filter((item)=>{
      if(item.email == this.login){
        item.address = this.clientAddress;
        // console.log("Address", item);
      }
    })
    localStorage.setItem('address', JSON.stringify(this.address));
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'This Loader will Not AutoHide'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    // this.hideLoader();
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }
}
