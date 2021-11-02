import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user = { nombre: '', clave: '', tipo: '' }
  
  constructor(
    private router: Router,
    private toastController: ToastController,
    private animationCtrl: AnimationController,
    private storage: Storage
  ) {
    storage.set('tipoUsuario','2')
  }


  async login() {
    this.storage.get('tipoUsuario')
    if (
      this.user.nombre != '' &&
      this.user.clave != '' &&
      this.user.tipo != ''
    ) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user },
      };
      

      if (this.storage.get('tipoUsuario') == '2') {
        this.router.navigate(['/dashboard-alumno'], navigationExtras);
      } else {
        this.router.navigate(['/dashboard-profesor'], navigationExtras);
      }
      this.user = { nombre: '', clave: '', tipo: '' };
    } else {
      this.animationCtrl.create()
        .addElement(document.querySelector('#content'))
        .duration(300)
        .keyframes([
          { offset: 0.25, 'transform': 'translate(10px)' },
          { offset: 0.75, 'transform': 'translate(-10px)' },
          { offset: 1, 'transform': 'translate(0px)' },
        ])
        .iterations(2)
        .play()
      const toast = await this.toastController.create({
        message: '¡Llene todos los campos!',
        duration: 1000,
        color: 'warning',
      });
      toast.present();
    }

 
  }
  cleanFields() {
    this.user = { nombre: '', clave: '', tipo: '' };
  }

  ngOnInit() {}
}
