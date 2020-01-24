import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ErrorPopupComponent } from 'src/app/components/error-popup/error-popup.component';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { dummyUser } from '../../tsFiles/dummyUser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  email = '';
  password = '';
  toast: any;
  error: Array<any> = [];
  dummyUser = dummyUser.user;
  constructor(
    public toastController: ToastController,
    private router: Router,
    public modal: ModalController,
    public alertController: AlertController,

  ) {

    let data = localStorage.getItem("login")
    if (data) {
      this.router.navigateByUrl('/home');
    } else {
      // this.menu.enable(false);
    }
  }

  ngOnInit() {

  }
  
  // Entry of Error modal 
  async presentModal(error) {
    const modal = await this.modal.create({
      component: ErrorPopupComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        errorList: this.error,
      }
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
        // this.theTestReturn = detail.data;
      }
    });
    return await modal.present();
  }

  //Validate Input Email and password 
  checkData() {
    this.error = [];
    if (!this.email && !this.password) {
      this.error[0] = "Email is Required";
      this.error[1] = "Password is Required";
      this.presentModal(this.error);
      return false;
    } else {
      if (!this.password) {
        this.error[0] = "Password is Required";
        this.presentModal(this.error);
        return false;
      } else {
        this.login();
        return true;
      }
    }
  }


  // Login When Email Id And Password entered //Start
  login() {
    //  this.checkData();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {      // Email String validator
      console.log('checked');
      this.dummyUser.map((item) => {
        if (this.email === item.email) {
          if (this.password === item.password) {
            localStorage.setItem("login", item.email);
          }
        }
      })

      let data = localStorage.getItem("login")
      if (!data) {
        this.error[0] = "User not Exist Please SignUp!";
        this.presentModal(this.error);
      } else {
        this.email = '';
        this.password = '';
        this.router.navigateByUrl('/home');
      }
    }
    else {
      this.error[0] = "Please enter valid email!";
      this.presentModal(this.error);
    }
  }
  // Login When Email Id And Password entered //End


goToSignUpPage(){
  this.router.navigateByUrl('/sign-up');
}

newlogin(){
  this.router.navigateByUrl('/home');
}

}
