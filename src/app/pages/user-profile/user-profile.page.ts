import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  @ViewChild('slider') slider: IonSlides;

selectedTab(index: number) {
   this.slider.slideTo(index);
}
  page:any;
  firstName ='Test First Name';
  lastName ='Test Last Name';
  email ='test@testing.com';
  mobile = '88888-00000';
  constructor() { }
 
  ngOnInit() {
    this.moveButton();
  }

  async moveButton() {
    let index = await this.slider.getActiveIndex();
    this.page = index.toString();
 }
//  const index = this.slides.nativeElement.getActiveIndex();

}
