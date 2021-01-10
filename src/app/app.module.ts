
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MatStepperModule, MatInputModule, MatFormFieldModule, MatRippleModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';



var firebaseConfig = {
  apiKey: "AIzaSyC8yZKvwx4Gn1vwMyoowuRG2eDlc0hE_dE",
  authDomain: "medical-monitoring-e4482.firebaseapp.com",
  databaseURL: "https://medical-monitoring-e4482.firebaseio.com",
  projectId: "medical-monitoring-e4482",
  storageBucket: "medical-monitoring-e4482.appspot.com",
  messagingSenderId: "1048478985217",
  appId: "1:1048478985217:web:ea0e37f1b819c465132400",
  measurementId: "G-2V065RKFVY"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    MatStepperModule,
    MatInputModule,
    MatRippleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,
    MatFormFieldModule,IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
