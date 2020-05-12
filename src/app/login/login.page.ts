import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { GeneralService } from '../service/general.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  connected : boolean;
  constructor(public generalService:GeneralService) 
  { 

  }

  ngOnInit() {
  }
  login(email:string, password:string)
  {
    this.generalService.login(email,password);
    this.connected = this.generalService.connected;
  }
}
