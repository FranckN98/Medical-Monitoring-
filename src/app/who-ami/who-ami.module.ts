import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhoAmiPageRoutingModule } from './who-ami-routing.module';

import { WhoAmiPage } from './who-ami.page';
import { ThemeService } from '../service/theme.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhoAmiPageRoutingModule
  ],
  declarations: [WhoAmiPage]
})
export class WhoAmiPageModule {
  constructor(private themeService: ThemeService){

  }
  themeToggle(){
    this.themeService.setToggle();
  }
}
