import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  firstName = '';
  lastName = ''
  email = '';
  password = '';
  confirmPassword ='';
  constructor(
    private router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  test(){
    console.log("firstName", this.firstName);
    console.log("lastName", this.lastName);
    console.log("email", this.email);
    console.log("password", this.password);
    console.log("confirmPassword", this.confirmPassword);

  }

  validate(){
    let data = '';
    this.firstName = this.firstName.trim();
    this.email = this.email.trim();
    this.password = this.password.trim();
    this.confirmPassword = this.confirmPassword.trim();
    if(this.firstName === ''){
      data = 'Please Add Name'
      this.presentAlert(data);
      return false;
    } else if(this.email === ''){
      data = 'Please Add Email'
      this.presentAlert(data);
      return false;
    } else if(this.password === ''){
      data = 'Please Create Password'
      this.presentAlert(data);
      return false;
    } else if(this.password !== this.confirmPassword){
      data = 'Password and Confirm not matched.'
      this.presentAlert(data);
      return false;
    } else{
      this.signUp();
    }
  }
  ngAfterContentInit(){
    
  }
  signUp(){

      this.router.navigateByUrl('/home');
      this.firstName = '';
      this.lastName = ''
      this.email = '';
      this.password = '';
      this.confirmPassword ='';
  }

  goTologinPage(){
    this.router.navigateByUrl('/login-page');
  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: data,
      buttons: [{
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }
        ]
    });
    await alert.present();
  }
}
