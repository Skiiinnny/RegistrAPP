import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  constructor(
    private toastController: ToastController,
    private router: Router,
    private animationCtrl: AnimationController
  ) {}

  username = '';

  async envio() {
    if (this.username != '') {
      const toast = await this.toastController.create({
        message: '¡Correo de recuperación enviado!',
        duration: 1000,
        color: 'success',
      });
      toast.present();
     
      this.router.navigate(['/home']);
    } else {
      this.animationCtrl
        .create()
        .addElement(document.querySelector('#input'))
        .duration(300)
        .keyframes([
          { offset: 0.25, transform: 'translate(10px)' },
          { offset: 0.75, transform: 'translate(-10px)' },
          { offset: 1, transform: 'translate(0px)' },
        ])
        .iterations(2)
        .play();
      const toast = await this.toastController.create({
        message: '¡Llene todos los campos!',
        duration: 2000,
        color: 'warning',
      });
      toast.present();
    }
  }

  ngOnInit() {}
}
