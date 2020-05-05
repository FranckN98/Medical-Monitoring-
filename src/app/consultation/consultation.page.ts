import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.css'],
})
export class ConsultationPage implements OnInit {

  backButton : boolean = true; 
  step1 : boolean = true;
  step2 : boolean ;
  step3 : boolean ;
  constructor() { 

    if(this.step1) this.backButton = true;
  }

  ngOnInit() {
  }

  changeStep()
  {
    if(this.step1)
    {
      this.step1 = false;
      this.step2 = true; 
      this.step3 = false;
    }
    else  if(this.step2)
    {
      this.step1 = false;
      this.step3 = true; 
      this.step2 = false;
    }
  }

  backStep()
  {
    if(this.step2)
    {
      this.step2 = false;
      this.step1 = true; 
      this.step3 = false;
    }
    else  if(this.step3)
    {
      this.step1 = false;
      this.step2 = true; 
      this.step3 = false;
    }
  }
}
