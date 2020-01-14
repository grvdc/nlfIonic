import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllComponentsPage } from './all-components.page';

describe('AllComponentsPage', () => {
  let component: AllComponentsPage;
  let fixture: ComponentFixture<AllComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComponentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
