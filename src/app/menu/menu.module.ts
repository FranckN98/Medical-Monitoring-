import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';
import {MatStepperModule, MatInputModule, MatFormFieldModule, MatRippleModule} from '@angular/material';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {

  constructor(public nvctrl: NavController) { }

  ngOnInit() {
  }

  goto()
  {
    this.nvctrl.navigateRoot('/info'); 
    console.log('work');
  }
}
