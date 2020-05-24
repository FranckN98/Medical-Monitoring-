import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public nvctrl: NavController) { }

  ngOnInit() {
  }

  goto()
  {
    this.nvctrl.navigateForward('/info'); 
    console.log('work')
  }
}
