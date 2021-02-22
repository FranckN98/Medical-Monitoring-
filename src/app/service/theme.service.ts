import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkm = false;
  constructor(private plt: Platform) {
    this.plt.ready().then( () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      prefersDark.addListener(e => {
         this.setTheme(e.matches);
      });
    })
   }

   setToggle(){
    this.darkm = !this.darkm
    this.setTheme(this.darkm);
   }

   setTheme(dark){
     this.darkm = dark;

     if(this.darkm){
       document.body.classList.add("dark");
     }
     else{
      document.body.classList.remove("dark");
     }
   }
}
