import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss'],
})
export class ErrorPopupComponent implements OnInit {
  @Input() errorList: any;
  constructor(
    public modal:ModalController,

  ) {
    console.log("errorList", this.errorList)
   }

  ngOnInit() {}
  closeModal(){
    this.modal.dismiss({
      'dismissed': true
    });
  }
}
