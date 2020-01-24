import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  // @ViewChild('slider') slider: IonSlides;

  // selectedTab(index: number) {
  //    this.slider.slideTo(index);
  // }
  page: any;
  firstName = 'Dummy';
  lastName = 'User';
  email = 'test@testing.com';
  mobile = '88888-00000';
  address = "#E51 Phase-8 Ind.Area Mohali, 160055";
  edit: boolean = false;
  show: boolean = true;
  constructor(
    public loadingController: LoadingController,
  ) { }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
    // this.moveButton();
  }

  //   async moveButton() {
  //     let index = await this.slider.getActiveIndex();
  //     this.page = index.toString();
  //  }
  //  const index = this.slides.nativeElement.getActiveIndex();

  editDetail() {
    this.edit = !this.edit;
    if(this.edit){
      this.show = false;
    }else{
      this.edit = true;
      this.presentLoading();
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Saving Data',
      duration: 2000,
      spinner:'crescent',
      // translucent: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.show = true;
    this.edit = false;

    console.log('Loading dismissed!');
  }

  
}
