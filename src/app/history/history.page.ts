import { GeneralService } from './../service/general.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit , ViewChild } from '@angular/core';
import {AlertController, IonicSafeString} from '@ionic/angular'
import { CalendarComponent } from 'ionic2-calendar/calendar';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { stringify } from 'querystring';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;
  currentDate = new Date();
  mode:string = "month";
  currentMonth: string; 
  showAddEvent: boolean; 
  visits = [];
  fields = [];
  label : string; 
  listview = true;
  visit = {
    id : "",
    reason : "",
    temperature : "",
    prescription : "", 
    startTime: new Date().toString(),
    endTime:new Date().toString(),
    
    other : this.fields
  }
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
        formatMonthViewDay: function(date:Date) {
            return date.getDate().toString();
        },
        formatMonthViewDayHeader: function(date:Date) {
            return 'MonMH';
        },
        formatMonthViewTitle: function(date:Date) {
            return 'testMT';
        },
        formatWeekViewDayHeader: function(date:Date) {
            return 'MonWH';
        },
        formatWeekViewTitle: function(date:Date) {
            return 'testWT';
        },
        formatWeekViewHourColumn: function(date:Date) {
            return 'testWH';
        },
        formatDayViewHourColumn: function(date:Date) {
            return 'testDH';
        },
        formatDayViewTitle: function(date:Date) {
            return 'testDT';
        }
    }
};
 
  
 
 
  constructor(public alertController:AlertController, public afDB: AngularFireDatabase, public generalService: GeneralService) 
  { 
    this.visit.id = this.generalService.userId;
    this.loadEvent();
  
  }

  async presentAlert() {
 

}

async onEventSelected(event: any) 
{

  var otherText : string | IonicSafeString = '';

  for(var i = 0; i < event.other.length; i++)
  {
    otherText += event.other[i].label + ': <b>' + event.other[i].Value + '</b> <br>' ; 
  }
  console.log(otherText)
  const alert = await this.alertController.create({
    header: event.title,
  //  subHeader: 'Date of Day :' + event.startTime +' Date of Next Visit : '+event.endTime ,
    message: 'Temperature : <b>' + event.temperature + '</b><br>Prescription : <b>' + event.prescription + '</b><br>' +otherText,
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
}

  ngOnInit() {
  }
 
  onViewTitleChanged(title: string)
  {
    this.currentMonth = title; 
  }
  showHideForm()
  {
    

    if(!this.showAddEvent)
    {
      this.showAddEvent = !this.showAddEvent;
      this.mode = 'day';
    }
    else
    {
      this.showAddEvent = !this.showAddEvent;
      this.mode = 'month';
    }
  }

  addEvent()
  {
     this.afDB.list('History').push(
       {
        id : this.visit.id,
        title :this.visit.reason,
        temperature : this.visit.temperature,
        prescription : this.visit.prescription, 
        startTime: this.visit.startTime,
        endTime : this.visit.endTime,
        other : this.fields
       }
     )
   
    
    this.showHideForm();

  }
  loadEvent()
  {
    this.afDB.list('History').snapshotChanges(['child_added']).subscribe(actions => {
      actions.forEach(action => {

        if(this.visit.id == action.payload.exportVal().id)
        {
          if(action.payload.exportVal().other != null)
          {
            for(let [key, value] of Object.entries(action.payload.exportVal().other))
            {
                this.fields.push(value);
              
            }
          }
          var visitObject = 
          {
            id : action.payload.exportVal().id,
            title : action.payload.exportVal().title,
            temperature : action.payload.exportVal().temperature,
            prescription : action.payload.exportVal().prescription, 
            startTime: new Date(action.payload.exportVal().startTime),
             endTime: new Date(action.payload.exportVal().endTime),
            other : this.fields
          }

          this.visits.push(visitObject);
           this.fields = [];
           this.visits.sort((a, b) => b.startTime - a.startTime)
        }
        this.myCalendar.loadEvents();
      });
    });
    this.visits.sort((a, b) => b.startTime - a.startTime)
  }
  
  changeMode(mode: string)
  {
    this.mode = mode; 
    console.log(mode);
  }

  newFields(placeholder: string)
  {
    this.fields.push({label: placeholder , Value : ""})
    this.label = "";
  }
  deleteField(label:string)
  {
    var index = -1;
    
    for(let i = 0; i< this.fields.length; i++)
      if(this.fields[i].label === label )
        index = i; 
      
    if (index != -1)
    {
      console.log(index)
  
      this.fields.splice(index, 1);
    } 
    else
    {
      console.log("Cannot delete : "+index)
      console.log(this.fields)
    }
  }
  disabledField(value:string)
  {
    if(value == "")
    {
 
      
    }
  }

}
