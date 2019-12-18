import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  firebase: {
    apiKey: "AIzaSyB7NxldF6h-O1CvHDFCBo5rsha7CSvolTQ",
    authDomain: "newecom-56ba6.firebaseapp.com",
    databaseURL: "https://newecom-56ba6.firebaseio.com",
    projectId: "newecom-56ba6",
    storageBucket: "newecom-56ba6.appspot.com",
    messagingSenderId: "1076462211389",
    appId: "1:1076462211389:web:5e826357648f6fc90b3554",
    measurementId: "G-6N87B8XPX6"
  }
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
    // firebase.initializeApp(firebase);

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
