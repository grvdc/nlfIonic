import { Component } from '@angular/core';
import { MenuController,Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private menu: MenuController,
    private router: Router,
    public platform: Platform
  ) {
    this.menu.enable(true);
    this.platform.backButton.subscribe(() => {
      console.log("testbk");
    });

  }
  ngOnInit() {
    this.menu.enable(true, 'custom');
  }
  openmenu(){
   this.menu.open();
    
  }
  logout() {
    localStorage.removeItem("login");
    this.router.navigateByUrl('/login-page');
  }
}
