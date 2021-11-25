import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {
  imgURL;
  constructor(
    private animationCtrl: AnimationController, 
    private camera: Camera,
    private qrScanner: QRScanner) {}

  ngOnInit() {}

  animar() {
    this.animationCtrl
      .create()
      .addElement(document.querySelector('#texto'))
      .duration(200)
      .keyframes([
        { offset: 0.25, transform: 'translate(10px)' },
        { offset: 0.75, transform: 'translate(-10px)' },
        { offset: 1, transform: 'translate(0px)' },
      ])
      .iterations(2)
      .play();
    
  }
  getFromCamera() {
    let texto = document.getElementById('texto');
    let spinner = document.getElementById('spinner');
    let camara = document.getElementById('camara');

    texto.classList.add('displayNone');
    spinner.classList.add('displayNone');
    camara.classList.remove('displayNone');
    
    this.camera.getPicture({

      sourceType : this.camera.PictureSourceType.CAMERA,

      destinationType: this.camera.DestinationType.DATA_URL

    }).then((imageData) => {

      this.imgURL = 'data:image/jpeg;base64,' + imageData;

    }, async error => {
      camara.classList.add('posicion');
      console.log("No se puede obtener cámara.");
    });
    
  }
}
