import { AngularFireAuth } from '@angular/fire/auth';
import { GeneralService } from './../service/general.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.css'],
})
export class ChatPage implements OnInit {

  public messages: any = [];
  doctors = [];
  doctoren = [
    {
      name : "Chriss Djoar",
      town : "Ethiopie", 
      startDate : "02.04.2020"
    },
    {
      name : "Cyndi Pria",
      town : "Santa Barbara", 
      startDate : "11.04.2019"
    },
    {
      name : "Gerharl Kevin",
      town : "New York", 
      startDate : "02.04.2020"
    },
    {
      name : "Henry Pford",
      town : "Jaunde", 
      startDate : "02.04.2020"
    },
    {
      name : "Iwabe Arima",
      town : "Senegal", 
      startDate : "02.04.2020"
    },
    {
      name : "Jürgen Müller",
      town : "Köln", 
      startDate : "02.12.2020"
    },
    {
      name : "Laury",
      town : "Belgique", 
      startDate : "02.04.2020"
    },
    {
      name : "Lindy Motoma",
      town : "Bunja", 
      startDate : "02.04.2020"
    },
    {
      name : "Mary Ross",
      town : "Barcelona", 
      startDate : "11.04.2019"
    },
    {
      name : "Rin",
      town : "Paris", 
      startDate : "02.04.2020"
    },
    {
      name : "Rolando",
      town : "Monaco", 
      startDate : "02.12.2020"
    },
    
    
    {
      name : "Sonika Amadi",
      town : "Kamerun", 
      startDate : "02.04.2020"
    },
    
   
    

  ]
  partnerSelect = false;
  selectedDoctor = { 
    name:"",
    doctorId: "",
    startDate: "",
    rating: "",
    town: ""
  };
  messageText : any; 
  userId  ;
  
  constructor(public afDB: AngularFireDatabase,public afAuth: AngularFireAuth, public generalService: GeneralService) { 

    this.userId = this.generalService.userId;
    this.getMessages();
    this.getDoctors();
  }

  ngOnInit() {
  }

  sendMessage()
  {
 
    console.log(this.selectedDoctor)
    this.afDB.list('Messages/').push({
      userId: this.userId,
      text: this.messageText,
      date:new Date().toString(),
      partnerId : this.selectedDoctor.doctorId
    })

    this.messageText ='';
  }

  getMessages()
  {
    this.afDB.list('Messages/').snapshotChanges(['child_added']).subscribe(
      actions => {
        this.messages = []; 
        actions.forEach(action => {
          this.messages.push({
            text:action.payload.exportVal().text,
            userId: action.payload.exportVal().userId,
            date: action.payload.exportVal().date,
            partnerId : action.payload.exportVal().partnerId
          })
        })
      }
    )
    this.messages.filter(message => (message.userId == this.userId&&this.selectedDoctor.doctorId==message.partnerId) || (message.partnerid == this.userId&&this.selectedDoctor.doctorId==message.userId));
  }

  selectDoctor(doctor)
  {
    this.partnerSelect = true; 
    this.selectedDoctor = doctor;

  }

  getDoctors()
  {
    this.afDB.list('DoctorList/').snapshotChanges(['child_added']).subscribe(
      actions => {
        
        actions.forEach(action => {
          console.log(action.payload.exportVal().name);
          this.doctors.push({
            name:action.payload.exportVal().Name,
          //  doctorId: action.payload.exportVal().id,
            startDate: action.payload.exportVal().startDate,
         //   rating: action.payload.exportVal().rating,
            town: action.payload.exportVal().town
          })
        })
      }
    )

    this.doctors.sort((a, b) => a.name - b.name);

  }
}
