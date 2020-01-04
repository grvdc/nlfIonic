import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-address-screen',
  templateUrl: './address-screen.page.html',
  styleUrls: ['./address-screen.page.scss'],
})
export class AddressScreenPage implements OnInit {
  login: any;
  address = {
    name : '',
    mobile : '',
    locality : '',
    address : '',
    landmark : '',
    city : '',
    state : '',
    zip : '',
    country : '',
    alternate : '',
  }
    constructor(   
    private router: Router
    ) { 
  }

  ngOnInit() {
    this.getLoginEmail();
    console.log("login", this.login);
  }

  getLoginEmail(){
    this.login = localStorage.getItem("login");
  }

  addAddress(){
    let address = [];
    let localAddress =[];
    if (!JSON.parse(localStorage.getItem('address'))) {
      localAddress.push({
        email: this.login,
        address:[this.address],
      })
      // localAddress.push(this.address);
    } else {
      localAddress = JSON.parse(localStorage.getItem('address'));
      let test = localAddress.filter((item)=>{
        if(item.email == this.login){
          item.address.push(this.address);
          return item.email;
        }
      });
      console.log('testlength',test.length);

      if(test.length == 0 ){
        localAddress.push({
          email: this.login,
          address:[this.address],
        })
      }
      console.log('test',test);
      // localAddress.map((item)=>{
      //   if(item.email == this.login){
      //     item.address.push(this.address);
      //   } 
      // })
      // localAddress.push(this.address)
    }

      localStorage.setItem("address",JSON.stringify(localAddress));
     this.reset();
      
     this.router.navigate(['all-address']);
  }

  reset(){
    this.address = {
      name : '',
      mobile : '',
      locality : '',
      address : '',
      landmark : '',
      city : '',
      state : '',
      zip : '',
      country : '',
      alternate : '',
    }  
  }

  continue(){
    this.router.navigate(['invoice-page']);
  }
}
