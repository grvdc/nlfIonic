import { Component, OnInit } from '@angular/core';
import { ToastController,  AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ErrorPopupComponent } from 'src/app/components/error-popup/error-popup.component';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

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
  constructor(
    public toastController: ToastController,
    private router: Router,
    public modal:ModalController,
    public alertController: AlertController,

  ) {
   
    let data = localStorage.getItem("login")
    if(data){
      this.router.navigateByUrl('/home');
    } else{
      // this.menu.enable(false);
    }
   }

  ngOnInit() {
   
  }
  async presentModal(error) {
    const modal = await this.modal.create({
      component: ErrorPopupComponent,
      cssClass: 'my-custom-modal-css',
      componentProps:{
        errorList : this.error,
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
  checkData(){
    this.error = [];
    if(!this.email && !this.password){
      this.error[0] = "Email is Required";
      this.error[1] = "Password is Required";
      this.presentModal(this.error);
      return false;
    } else{
      if(!this.password){
        this.error[0] = "Password is Required";
        this.presentModal(this.error);
        return false;
      }else{
        this.login();
        return true;
      }
    }
  }
  login() {
  //  this.checkData();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      console.log('checked');
      localStorage.setItem("login", 'true');
      let data = localStorage.getItem("login")
      if(data){
        this.email = '';
        this.password = '';
       this.router.navigateByUrl('/home');

      }
    }
    else{
      this.error[0] = "Please enter valid email!";
      this.presentModal(this.error);
      // this.presentToast();
      // this.presentAlertConfirm();
    }
    
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.email?'Please enter valid email!':'Please enter email id!',
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      cssClass: 'red',
      mode: "ios",
      backdropDismiss:false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });


    await alert.present();
  }

}
