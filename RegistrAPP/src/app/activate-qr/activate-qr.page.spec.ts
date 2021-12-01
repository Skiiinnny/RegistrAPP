import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateQrPage } from './activate-qr.page';

describe('ActivateQrPage', () => {
  let component: ActivateQrPage;
  let fixture: ComponentFixture<ActivateQrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se aplica la clase sample a la imagen QR:', () => {
    let dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector("#QR-img").className).toEqual('sample');
  });
});

