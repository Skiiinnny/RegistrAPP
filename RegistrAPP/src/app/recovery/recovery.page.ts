import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DbService } from '../services/db.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  recoveryForm: FormGroup;
  constructor(
    private toastController: ToastController,
    private router: Router,
    private animationCtrl: AnimationController,
    private db : DbService,
    private formBuilder: FormBuilder

  ) {}




  async envio() {
    this.db.consultarNombreUsuario(this.recoveryForm.value.username).then(async (  res ) =>{
      if (res.cuenta_usuario == this.recoveryForm.value.username) { 
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
        this.recoveryForm.reset();
      }
    },async error => {
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
        message: '¡Nombre de usuario no existente!',
        duration: 1000,
        color: 'warning',
      });
      toast.present();
    })
 
    // 
    
  } 

  ngOnInit() {
    this.recoveryForm = this.formBuilder.group({
      username: ['']
    })
  }
}
