import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPopupComponent } from './components/error-popup/error-popup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicRatingModule } from 'ionic4-rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// environment
import { environment } from '../environments/environment';
import { CheckoutFormStepperComponent } from './components/checkout-form-stepper/checkout-form-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule ,} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,ErrorPopupComponent ,CheckoutFormStepperComponent],
  entryComponents: [ErrorPopupComponent,CheckoutFormStepperComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicRatingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    HttpClientModule
    // CheckoutFormStepperComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
