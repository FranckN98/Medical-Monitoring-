import { InformationPage } from './information/information.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'who', pathMatch: 'full' },
  { path: 'menu', loadChildren:  () => import('./menu/menu.module').then( m => m.MenuPageModule)},
  { path: 'info', loadChildren:  () => import('./information/information.module').then( m => m.InformationPageModule)},
  { path: 'history', loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)},
  { path: 'consult', loadChildren: () => import('./consultation/consultation.module').then( m => m.ConsultationPageModule)},
  { path: 'who', loadChildren: () => import('./who-ami/who-ami.module').then( m => m.WhoAmiPageModule)},
  { path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'chat',  loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)},
  {  path: 'search',loadChildren: () => import('./search-patient/search-patient.module').then( m => m.SearchPatientPageModule)},

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 