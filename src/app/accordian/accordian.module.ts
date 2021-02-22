import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccordianComponent } from './accordian.component';

@NgModule({
    declarations:[AccordianComponent],
    imports:[IonicModule],
    exports: [AccordianComponent]
})
export class AccordianModule{}