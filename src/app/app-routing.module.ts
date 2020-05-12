import { InformationPage } from './information/information.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)},
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)},
  { path: 'info', loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'history', loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)},
  { path: 'consult', loadChildren: () => import('./consultation/consultation.module').then( m => m.ConsultationPageModule)},
  { path: 'who',loadChildren: () => import('./who-ami/who-ami.module').then( m => m.WhoAmiPageModule)},
  { path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 