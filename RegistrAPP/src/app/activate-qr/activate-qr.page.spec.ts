import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AnimationController, ToastController } from '@ionic/angular';

import { ActivateQrPage } from './activate-qr.page';

describe('ActivateQrPage', () => {
  let component: ActivateQrPage;
  let fixture: ComponentFixture<ActivateQrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateQrPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        AnimationController,
        ToastController,
        UrlSerializer,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('El componente ActivateQR es creado.', () => {
    expect(component).toBeTruthy();
  });

  it('Se aplica la clase sample a la imagen QR.', () => {
    let dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector("#QR-img").className).toEqual('sample');
  });
});

