import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { GeneralService } from '../service/general.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  doctor: boolean;
  connected : boolean;
  email : string
  password : string
  passwordDifferent : string
  registration:boolean
  conditionAccepted:boolean
  cpassword:string
    name:string = ""
    vorname:string = ""
    geburtstag:string = ""
    passwort:string = ""
  
  


  constructor(public generalService:GeneralService,public afAuth: AngularFireAuth) 
  { 
    
  }

  ngOnInit() {
  }
  login(email:string, password:string)
  {
    this.generalService.login(email,password);
    this.connected = this.generalService.connected;
    this.doctor = this.generalService.doctor;
  }
  registring(email:string, password:string)
  {
    this.afAuth.createUserWithEmailAndPassword(email,password).catch(
      function err(error)
      {
        console.error(Error);
      }
      );
    
  }
}
