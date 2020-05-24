import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  dataUser = {
    email: '',
    password: ''
 };
 doctor : boolean; 
 patient : boolean;
 userId: any; 
  
 connected: boolean;

  constructor(public afAuth: AngularFireAuth,public afDB: AngularFireDatabase, public navCtrl:NavController,) 
  { 
    this.afAuth.authState.subscribe(auth=>{
      if(!auth)
      {
        this.connected = false;
      }
      else
      {
        this.connected = true;
        this.userId = auth.uid; 
        
      }
    })
  }

  selectUserType(i:number)
  {
    if(i == 1) // 1 = Not a Patient
    {
      this.doctor = true; 
      this.patient = false; 
    }
    else
    { 
      this.doctor = false; 
      this.patient = true; 
    }
  }

  login(email:string, password:string)
  {
    this.afAuth.signInWithEmailAndPassword(email,password)
    .then(value => {
      
      if(this.doctor)
      {
        this.navCtrl.navigateRoot('/home');
        this.connected = true;
      }
      else
      {
        this.navCtrl.navigateRoot('/menu');
        this.connected = true;
      }
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
    this.afAuth.authState.subscribe(auth=>{
      if(!auth)
      {
        this.connected = false;
      }
      else
      {
        this.connected = true;
        this.userId = auth.uid; 
        
      }
    })
   
  }

}
