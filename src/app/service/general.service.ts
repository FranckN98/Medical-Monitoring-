import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  dataUser = {
    email: '',
    password: ''
 };
  
 connected: boolean;

  constructor(public afAuth: AngularFireAuth) 
  { 
    
  }

  login(email:string, password:string)
  {
    this.afAuth.signInWithEmailAndPassword(email,password);
    this.afAuth.authState.subscribe(auth=>{
      if(!auth)
      {
        this.connected = false;
      }
      else
      {
        this.connected = true;
      }
    })
  }
}
