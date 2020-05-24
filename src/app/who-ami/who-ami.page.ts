import { GeneralService } from './../service/general.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-who-ami',
  templateUrl: './who-ami.page.html',
  styleUrls: ['./who-ami.page.css'],
})
export class WhoAmiPage implements OnInit {

  constructor(public generalService:GeneralService, public navCtrl:NavController) { }

  ngOnInit() {
  }

  selectUser( i : number)
  {
    this.generalService.selectUserType(i);
    this.navCtrl.navigateRoot('/login');
  }

}
