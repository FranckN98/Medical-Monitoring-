import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeneralService } from './../service/general.service';


@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.page.html',
  styleUrls: ['./search-patient.page.scss'],
})
export class SearchPatientPage implements OnInit {

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

  getPatient(patientUniqueId:String)
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
              if(action.payload.exportVal().id == patientUniqueId)
              {
                this.generalService.userId = patientUniqueId;
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


  ngOnInit() {
  }

}
