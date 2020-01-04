import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

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
  constructor(
    private router: Router
  ) {
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

  ngOnInit() {
   
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
}
