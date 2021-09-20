import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AnimationController, ToastController, Animation } from '@ionic/angular';

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
    private animationCTRL: AnimationController
  ) {}


  async login() {
    if (
      this.user.nombre != '' &&
      this.user.clave != '' &&
      this.user.tipo != ''
    ) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user },
      };
      if (this.user.tipo == '2') {
        this.router.navigate(['/dashboard-alumno'], navigationExtras);
      } else {
        this.router.navigate(['/dashboard-profesor'], navigationExtras);
      }
      this.user = { nombre: '', clave: '', tipo: '' };
    } else {
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
