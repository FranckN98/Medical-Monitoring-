import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPatientPage } from './search-patient.page';

describe('SearchPatientPage', () => {
  let component: SearchPatientPage;
  let fixture: ComponentFixture<SearchPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
