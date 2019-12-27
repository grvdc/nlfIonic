import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopBycaegoriePage } from './shop-bycaegorie.page';

describe('ShopBycaegoriePage', () => {
  let component: ShopBycaegoriePage;
  let fixture: ComponentFixture<ShopBycaegoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBycaegoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopBycaegoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
