import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressScreenPage } from './address-screen.page';

describe('AddressScreenPage', () => {
  let component: AddressScreenPage;
  let fixture: ComponentFixture<AddressScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
