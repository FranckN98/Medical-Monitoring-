import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPatientPageRoutingModule } from './search-patient-routing.module';

import { SearchPatientPage } from './search-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPatientPageRoutingModule
  ],
  declarations: [SearchPatientPage]
})
export class SearchPatientPageModule {}
