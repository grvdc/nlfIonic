import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  login = '';
  menuItem = [
    { logo: 'list', item: 'Project List', highlighted: false },
    { logo: 'person', item: 'Company Member', highlighted: false },
    { logo: 'briefcase', item: 'Course Work', highlighted: false },
    { logo: 'laptop', item: 'Training Videos', highlighted: false },
    { logo: 'logo-game-controller-a', item: 'Captive Games', highlighted: false },
    { logo: 'lock', item: 'Change Password', highlighted: false },
    { logo: 'alert', item: 'Help', highlighted: false },
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
    if (!this.login) {
      this.router.navigateByUrl('/login-page');
    }

  }

  initializeApp() {
    this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  print(value) {
    this.highlightedOff();
    this.menu.toggle();
    value.highlighted = true;
    switch(value.item){
      case 'Logout':
        this.logout();
        this.highlightedOff();
      case 'Help':
        console.log("value", value);
    }

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

}
