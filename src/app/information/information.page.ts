import { GeneralService } from './../service/general.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.css'],
})
export class InformationPage implements OnInit {

  patient : personInfo = new personInfo();
  fields = [];
  label : string; 
  edit : boolean;
  key : any = 0;
  imageProfil : any;
  existImage : boolean = false; 
  constructor( public generalService: GeneralService,public afSG : AngularFireStorage, public afDB: AngularFireDatabase)
  { 
    this.patient.id = generalService.userId;
    this.read();
   this.getImagesDatabase();
  
  }

  getImagesDatabase()
  {
    this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
      // console.log(images);
      var defautImage;
      images.forEach(image => 
        {
          if(image.payload.exportVal().id == this.patient.id)
          {
            this.getImagesStorage(image); 
            this.existImage = true; 
          }

          
        })
    });
  }

  getImagesStorage(image : any)
  {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      this.imageProfil = imgUrl;
    });
  }
  add()
  {
    this.afDB.list('PatientInformation/').push({
      id : this.patient.id,
      name: this.patient.name ,
      weight : this.patient.weight,
      age : this.patient.age,
      size : this.patient.size,
      allergies : this.patient.allergies,
      athletic : this.patient.athletic,
      diseases : this.patient.diseases,
      smoker :  this.patient.smoker,
      bloodgroup : this.patient.bloodgroup, 
      job : this.patient.job ,
      vegetarian : this.patient.vegetarian,
      ethnies : this.patient.ethnie,
      diabetic : this.patient.diabetic, 
      vaccine : this.patient.vaccine,
      other : this.fields,
      gender : this.patient.gender
    })
    
  }
  update()
  {
    if(this.key == 0)
    {
      this.add()
    }
    else
    {
      this.afDB.object('/PatientInformation/'+ this.key).update({
        id : this.patient.id,
        name: this.patient.name ,
        weight : this.patient.weight,
        age : this.patient.age,
        size : this.patient.size,
        allergies : this.patient.allergies,
        athletic : this.patient.athletic,
        diseases : this.patient.diseases,
        smoker :  this.patient.smoker,
        bloodgroup : this.patient.bloodgroup, 
        job : this.patient.job ,
        vegetarian : this.patient.vegetarian,
        ethnies : this.patient.ethnie,
        diabetic : this.patient.diabetic, 
        vaccine : this.patient.vaccine,
        other : this.fields,
        gender : this.patient.gender

      }) 
    }

    this.edit = false;
     
  }

  remove(key)
  {
    this.afDB.object('/PatientInformation/'+ key).remove();
  }

  read()
  {
    
    this.afDB.list('PatientInformation/').snapshotChanges(['child_added']).subscribe(
      actions => {
        this.patient = new personInfo();
        this.patient.id = this.generalService.userId;
        this.fields = [] ;
        actions.forEach(action => {
         
          console.log(action)
          if(action.payload.exportVal().id == this.patient.id)
          {
           this.key = action.key; 

            this.patient.age = action.payload.exportVal().age; 
            this.patient.allergies = action.payload.exportVal().allergies; 
            this.patient.name = action.payload.exportVal().name; 
            this.patient.size = action.payload.exportVal().size; 
            this.patient.athletic = action.payload.exportVal().athletic; 
            this.patient.diseases = action.payload.exportVal().diseases; 
            this.patient.smoker = action.payload.exportVal().smoker; 
            this.patient.bloodgroup = action.payload.exportVal().bloodgroup; 
            this.patient.job = action.payload.exportVal().job; 
            this.patient.vegetarian = action.payload.exportVal().vegetarian; 
            this.patient.diabetic = action.payload.exportVal().diabetic; 
            this.patient.vaccine = action.payload.exportVal().vaccine; 
            this.patient.weight = action.payload.exportVal().weight; 
            this.patient.ethnie = action.payload.exportVal().ethnies; 
            this.patient.gender = action.payload.exportVal().gender;

            if(action.payload.exportVal().other != undefined)
            {
                for(let [key, value] of Object.entries(action.payload.exportVal().other))
                {
                  this.fields.push(value)
                }
            }  
            
            
          }
        })
      }
    )
  }

  ngOnInit() {
  }
  newFields(placeholder: string)
  {
    this.fields.push({label: placeholder , value : ""})
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
      console.log(index);
      this.fields.splice(index, 1);
    } 
    else
    {
      console.log("Cannot delete : "+index)
      console.log(this.fields)
    }
  }

}

class personInfo
{
  id : any = "";
  name: string = "" ;
  gender: string = "";
  weight : number = 0;
  age : number = 0;
  size : number = 0;
  allergies : string = "";
  athletic : string ="";
  diseases : string ="";
  smoker : string =""; 
  bloodgroup : string =""; 
  job : string =""; 
  vegetarian : string ="";
  ethnie : string =""; 
  diabetic : string =""; 
  vaccine : string ="";
  other : [] = []

}
