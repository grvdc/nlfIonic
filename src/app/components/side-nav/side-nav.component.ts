import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  menuItem = [
    // { logo: 'list', item: 'Project List', highlighted: false },
    // { logo: 'person', item: 'Ladies jacket', highlighted: false },
    // { logo: 'alert', item: 'Men\'s Jacket', highlighted: false },
    // { logo: 'heart', item: 'Wishlist', highlighted: false },
    // { logo: 'laptop', item: 'Training Videos', highlighted: false },
    // { logo: 'cart', item: 'Cart', highlighted: false },
    // { logo: 'lock', item: 'Change Password', highlighted: false },
    // { logo: 'log-out', item: 'Logout', highlighted: false },
  ]
  constructor(
    private menu: MenuController,
    private router: Router
  ) {
    let login = localStorage.getItem("login");
    if (!login) {
      // this.router.navigateByUrl('/login-page');
      this.menuItem = [
        { logo: 'list', item: 'Project List', highlighted: false },
        { logo: 'person', item: 'Ladies jacket', highlighted: false },
        { logo: 'alert', item: 'Men\'s Jacket', highlighted: false },
        { logo: 'heart', item: 'Wishlist', highlighted: false },
      ]
    } else{
      this.menuItem = [
        { logo: 'list', item: 'Project List', highlighted: false },
        { logo: 'person', item: 'Ladies jacket', highlighted: false },
        { logo: 'alert', item: 'Men\'s Jacket', highlighted: false },
        { logo: 'heart', item: 'Wishlist', highlighted: false },
        { logo: 'laptop', item: 'Training Videos', highlighted: false },
        { logo: 'cart', item: 'Cart', highlighted: false },
        { logo: 'lock', item: 'Change Password', highlighted: false },
        { logo: 'log-out', item: 'Logout', highlighted: false },
      ]
    }
   }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
   
    
   
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
