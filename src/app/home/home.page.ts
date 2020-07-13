import { AngularFireDatabase } from '@angular/fire/database';
import { GeneralService } from './../service/general.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  logInwithId:boolean = true; 
  patients = []; 
  patientId : string; 
  patientName : string; 
  patientBirthDay : Date ; 
  patientNotFound : boolean;
  logInwithNameAndBirthday: boolean;
  search : boolean = false; 

  constructor(public generalService: GeneralService, public afdb : AngularFireDatabase) 
  {
    
  }

  getPatient()
  {
    this.patientId = this.patientId.trim(); 
    
    if(this.patientId =="")
    {
      this.patientNotFound = true; 
    }
    if(this.logInwithId)
    {
      this.afdb.list('PatientInformation/').snapshotChanges(['child_added']).subscribe(
        actions => {

          actions.forEach(action =>
            {
              if(action.payload.exportVal().id == this.patientId)
              {
                this.generalService.userId = this.patientId;
              }
          })
        }
      )
    }
    else if(this.logInwithNameAndBirthday)
    {
      this.afdb.list('PatientInformation/').snapshotChanges(['child_added']).subscribe(
        actions => {
          actions.forEach(action =>
            {
              var name : string = action.payload.exportVal().name;
              var age = new Date().getFullYear()-this.patientBirthDay.getFullYear(); 
               
              if( age ==action.payload.exportVal().age && name.toLowerCase().trim().includes(this.patientName.trim().toLowerCase()))
              {
                this.generalService.userId = this.patientId;
              }
          })
        })
    }
    this.search = !this.search;
    console.log(this.generalService.userId)
  }

}
