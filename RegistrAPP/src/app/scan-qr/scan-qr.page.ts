import { Component, OnInit } from '@angular/core';
import { AnimationController, Platform } from '@ionic/angular';
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
    public platform: Platform,
    private camera: Camera,
    private qrScanner: QRScanner
  ) {
    platform.ready().then(() => {
      this.scanQR();
    });

  }

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
    camara.classList.add('posicion');
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.CAMERA,

        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then(
        (imageData) => {
          this.imgURL = 'data:image/jpeg;base64,' + imageData;
        },
        async (error) => {
          camara.classList.add('posicion');
          console.log('No se puede obtener cámara.');
        }
      );
  }
  scanQR() {
    // Optionally request the permission early
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          console.log('qrscaner authorized');
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show().then(
            (data: QRScannerStatus) => {
              console.log('scaner show', data.showing);
            },
            (err) => {
              alert(err);
            }
          );
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          if (!status.authorized && status.canOpenSettings) {
            if (confirm('Would you like to enable QR code scanning? You can allow camera access in your settings.')) {
              this.qrScanner.openSettings();
            }
          }
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
