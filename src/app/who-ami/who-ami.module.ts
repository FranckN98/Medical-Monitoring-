import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhoAmiPageRoutingModule } from './who-ami-routing.module';

import { WhoAmiPage } from './who-ami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhoAmiPageRoutingModule
  ],
  declarations: [WhoAmiPage]
})
export class WhoAmiPageModule {}
