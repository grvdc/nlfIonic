import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import * as firebase from 'firebase';
import { dummyUser } from './tsFiles/dummyUser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  dummyUser = dummyUser.user;

  login: any;
  profilepic = '';
  menuItem = [
    { logo: 'list', item: 'Project List', highlighted: false },
    { logo: 'person', item: 'Ladies jacket', highlighted: false },
    { logo: 'alert', item: 'Men\'s Jacket', highlighted: false },
    { logo: 'heart', item: 'Wishlist', highlighted: false },
    { logo: 'laptop', item: 'Training Videos', highlighted: false },
    { logo: 'cart', item: 'Cart', highlighted: false },
    { logo: 'lock', item: 'Change Password', highlighted: false },
    { logo: 'log-out', item: 'Logout', highlighted: false },
  ]
  active = '';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router

  ) {
    this.initializeApp();
    this.login = localStorage.getItem("login");
    // if (!this.login) {
    //   this.router.navigateByUrl('/login-page');
    // } else {
    //   this.dummyUser.map((item) => {
    //     if (this.login === item.email) {
    //       this.profilepic = item.img;
    //     }
    //   })
    // }

  }

  initializeApp() {
    this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // firebase.initializeApp(firebase);

  }

  print(value) {
    this.highlightedOff();
    this.menu.toggle();
    value.highlighted = true;
    let categoy :any;
    switch (value.item) {
      case 'Logout':
        this.logout();
        this.highlightedOff();
        break;
      case 'Men\'s Jacket':
          categoy ={
            type: 'menJackets',
            header: 'Men\'s Jacket',
           } 
        console.log("value", value);
        this.openDetailsWithQueryParams(categoy);
        break;
      case 'Ladies jacket':
        categoy ={
         type: 'womenJackets',
         header: 'Ladies jacket',
        } 
        console.log("value", value);
        this.openDetailsWithQueryParams(categoy);
        break;
      case 'Wishlist':
        categoy = 'wishlist'
        console.log("value", value);
        this.router.navigate(['wishlist']);
        break;
      case 'Cart':
          this.router.navigate(['cart-page']);
          break;
      default:
          // this.openDetailsWithQueryParams(categoy);
          break;

    }
    console.log("categoy", categoy);
    // this.openDetailsWithQueryParams(categoy);
  }

  highlightedOff() {
    this.menuItem.forEach((values) => {
      values.highlighted = false;
    });
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  logout() {
    localStorage.removeItem("login");
    this.router.navigateByUrl('/login-page');
  }


  openDetailsWithQueryParams(data) {
    console.log('datatttt', data);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };
    this.router.navigate(['shop-bycaegorie'], navigationExtras);
  }
}
