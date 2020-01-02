import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllAddressPage } from './all-address.page';

describe('AllAddressPage', () => {
  let component: AllAddressPage;
  let fixture: ComponentFixture<AllAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
