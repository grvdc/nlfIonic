import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoicePagePage } from './invoice-page.page';

describe('InvoicePagePage', () => {
  let component: InvoicePagePage;
  let fixture: ComponentFixture<InvoicePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
