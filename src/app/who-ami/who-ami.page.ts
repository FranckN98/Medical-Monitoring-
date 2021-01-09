import { GeneralService } from './../service/general.service';
import { Component, OnInit } from '@angular/core';
import { IonMenuToggle, IonToggle, NavController } from '@ionic/angular';
import { ToggleType } from '@angular/material';

@Component({
  selector: 'app-who-ami',
  templateUrl: './who-ami.page.html',
  styleUrls: ['./who-ami.page.css'],
})
export class WhoAmiPage implements OnInit {
  darkmode = false;
  constructor(public generalService:GeneralService, public navCtrl:NavController) { }

  ngOnInit() {
  }

  selectUser( i : number)
  {
    this.generalService.selectUserType(i);
    this.navCtrl.navigateRoot('/login');
  }
};
