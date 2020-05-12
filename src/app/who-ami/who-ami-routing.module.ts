import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoAmiPage } from './who-ami.page';

const routes: Routes = [
  {
    path: '',
    component: WhoAmiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoAmiPageRoutingModule {}
