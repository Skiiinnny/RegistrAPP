import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { AnimationController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { ScanQrPage } from './scan-qr.page';
import { UrlSerializer } from '@angular/router';

describe('ScanQrPage', () => {
  let component: ScanQrPage;
  let fixture: ComponentFixture<ScanQrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanQrPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        AnimationController, 
        BarcodeScanner, 
        NavController, 
        UrlSerializer
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('El componente ScanQR es creado.', () => {
    expect(component).toBeTruthy();
  });

  it('Se aplica la clase loading al texto.', () => {
    let dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector("#texto").className).toEqual("loading");
  });
});
