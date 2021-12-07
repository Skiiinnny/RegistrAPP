import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private animationCtrl: AnimationController,
    private db: DbService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: [''],
      clave: ['']
    })
  }

  // Función para comprobar credenciales:

  iniciarSesion() {
    this.db.iniciarSesion(
      this.loginForm.value.usuario.toString().toLowerCase(),
      this.loginForm.value.clave
    ).then((res) => {
      let navigationExtras: NavigationExtras = {
        state: { user: res },
      };
      if (res.tipo_usuario == 1) {
        this.router.navigate(['/dashboard-alumno'], navigationExtras);
      } else {
        this.router.navigate(['/dashboard-profesor'], navigationExtras);
      }
      this.db.sesionActual = res;
      this.loginForm.reset();
    }, async error => {
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
        message: '¡Credenciales incorrectas!',
        duration: 1000,
        color: 'warning',
      });
      toast.present();
    })
  }
}

