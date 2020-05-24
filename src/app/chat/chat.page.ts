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
  messageText : any; 
  userId  ;
  constructor(public afDB: AngularFireDatabase,public afAuth: AngularFireAuth, public generalService: GeneralService) { 

    
    this.userId = this.generalService.userId;
    this.getMessages();
  }

  ngOnInit() {
  }

  sendMessage()
  {
 
    this.afDB.list('Messages/').push({
      userId: this.generalService.userId,
      text: this.messageText,
      date:new Date().toISOString()
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
            userId: action.payload.exportVal().AngularFireAuth,
            date: action.payload.exportVal().date
          })
        })
      }
    )
  }
}
