import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhoAmiPage } from './who-ami.page';

describe('WhoAmiPage', () => {
  let component: WhoAmiPage;
  let fixture: ComponentFixture<WhoAmiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAmiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhoAmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
