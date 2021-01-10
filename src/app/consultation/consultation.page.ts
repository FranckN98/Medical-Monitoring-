import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {


 
  private segmentList: Array<string> =["Step 1", "Step 2", "Step 3", "Step 4"]; 
  doctors = [
    {
      name : "Rin",
      town : "Paris", 
      startDate : "02.04.2020"
    },
    {
      name : "Chriss Djoar",
      town : "Ethiopie", 
      startDate : "02.04.2020"
    },
    {
      name : "Henry Pford",
      town : "Jaunde", 
      startDate : "02.04.2020"
    },
    {
      name : "Gerharl Kevin",
      town : "New York", 
      startDate : "02.04.2020"
    },
    {
      name : "Rolando",
      town : "Monaco", 
      startDate : "02.12.2020"
    },
    {
      name : "Mary Ross",
      town : "Barcelona", 
      startDate : "11.04.2019"
    },
    {
      name : "Laury",
      town : "Belgique", 
      startDate : "02.04.2020"
    },
    {
      name : "Sonika Amadi",
      town : "Kamerun", 
      startDate : "02.04.2020"
    },
    {
      name : "Lindy Motoma",
      town : "Bunja", 
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
      name : "Cyndi Pria",
      town : "Santa Barbara", 
      startDate : "11.04.2019"
    }

  ]
  private selectedSegment: string; 

  @ViewChild('slide', { static: true }) slide: IonSlides;

  
  constructor() 
  { 
    this.selectedSegment = this.segmentList[0];
   
  }
  ngOnInit() {
  }

  segmentChanged(ev: any, index: any) {
    
  }

  _segmentSelected(item: string, index: number) {
     
    this.slide.slideTo(index);
  }

  _ionSlideDidChange(event: any) {
  
    this.slide.getActiveIndex().then(index => {  
    this.selectedSegment = this.segmentList[index];
    })
  }
  changeSlide(event:any)
  {

  }
  
}
