import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  user = {nombre: "", clave: ""}

  constructor(private router: Router, private toastController: ToastController) {}

  async login(){
    if(this.user.nombre != "" && this.user.clave != ""){
      let navigationExtras: NavigationExtras = {
        state: {user: this.user}
        };

        this.router.navigate(['/dashboard-alumno'],navigationExtras);

        this.user = {nombre: "", clave: ""}
    }     
    else{
      const toast = await this.toastController.create({
        message: '¡Llene todos los campos!',
        duration: 1000,
        color: 'warning'
      });
      toast.present();
    }
  }

  ngOnInit(){
  }
}
