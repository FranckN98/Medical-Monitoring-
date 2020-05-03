import { Component, OnInit , ViewChild } from '@angular/core';

import { CalendarComponent } from 'ionic2-calendar/calendar';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
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
  fields = [];
  label : string; 
  allEvents = [];
  employee: string;
  employees: any[] = [];
  newEvent = {
    title: '',
    description: '',
    imageURL: '',
    startTime:'' ,
    endTime: '',
  }
  
 
 
  constructor() { }

  ngOnInit() {
  }
  /*
  */
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

    

    this.showHideForm();
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
    {
      if(this.fields[i].label === label )
      {
        index = i; 
      }
    }
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
