import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public nvctrl: NavController,  private themeService:ThemeService) { }

  ngOnInit() {
  }

  goto()
  {
    this.nvctrl.navigateForward('/info'); 
    console.log('work')
  }
  themeToggle()
  {
    this.themeService.setToggle();
  }
}
