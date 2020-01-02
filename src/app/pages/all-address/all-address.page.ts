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
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.login = localStorage.getItem("login");
    this.address = JSON.parse(localStorage.getItem('address'));
    this.address.filter((item)=>{
      if(item.email == this.login){
        this.clientAddress = item.address;
        // console.log("Address", item);
      }
    })
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

}
