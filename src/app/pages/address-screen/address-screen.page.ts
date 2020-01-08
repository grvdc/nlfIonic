import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private router: Router,
    public alertController: AlertController,
    ) { 
  }

  ngOnInit() {
    this.getLoginEmail();
    console.log("login", this.login);
  }

  getLoginEmail(){
    this.login = localStorage.getItem("login");
  }

 async addAddress(){
    let data = await this.validate();
    if(data){
    let address = [];
    let localAddress =[];
    if (!JSON.parse(localStorage.getItem('address'))) {
      localAddress.push({
        email: this.login,
        address:[this.address],
      })
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

  async validate(){
    this.address.name = this.address.name.trim()
    if(this.address.name == ''){
      this.address['nameRed'] = 'red';
      this.scrolltoDiv('name');
      this.presentAlert()
      return false;
    } else{
      return true;
    }
    
  }

  ttt(){
    if(this.address.name !== ''){
      this.address['nameRed'] = '';
    } 
  }

  scrolltoDiv(id){
    let todayItem = document.getElementById(id);
    todayItem.scrollIntoView(true);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Please add mandatory fields.',
      buttons: [{
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.closetest();
          }
        }
        ]
    });
    await alert.present();
  }

  closetest(){
    console.log("clocsetest");
  }
}
