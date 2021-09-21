import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }
  
  animar(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#texto'))
    .duration(200)
    .keyframes([
      {offset: 0.25, 'transform': 'translate(10px)'},
      {offset: 0.75, 'transform': 'translate(-10px)'},
      {offset: 1, 'transform': 'translate(0px)'},
    ])
    .iterations(2)
    .play()
  }
}
