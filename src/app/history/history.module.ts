import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonicModule } from '@ionic/angular';
import {CdkStepperModule} from '@angular/cdk/stepper'; 
import { HistoryPageRoutingModule } from './history-routing.module';
import {MatStepperModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { HistoryPage } from './history.page';

@NgModule({
  imports: [
    CommonModule,
    NgCalendarModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatStepperModule,
    IonicModule,
    CdkStepperModule,
    HistoryPageRoutingModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
