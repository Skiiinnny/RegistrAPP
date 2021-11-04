import { Component, OnInit } from '@angular/core';
import { AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-activate-qr',
  templateUrl: './activate-qr.page.html',
  styleUrls: ['./activate-qr.page.scss'],
})
export class ActivateQrPage implements OnInit {

  constructor(private animationCtrl: AnimationController,
              private toastController: ToastController) { }

  async animar(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#qr-sample'))
    .duration(800)
    .keyframes([
      {offset: 0.25, 'transform': 'translate(200px)'},
      {offset: 0.50, 'transform': 'translate(500px)'},
      {offset: 0.75, 'transform': 'translate(50px)'},
      {offset: 1, 'transform': 'translate(0px)'},
    ])
    .iterations(1)
    .play()

    const toast = await this.toastController.create({
      message: '¡Código compartido con éxito!',
      duration: 1000,
      color: 'success',
    });
    toast.present();
  }

  ngOnInit() {
  }

}
