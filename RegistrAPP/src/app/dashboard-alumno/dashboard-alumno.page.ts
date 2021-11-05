import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Usuario } from '../services/usuario';


@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.page.html',
  styleUrls: ['./dashboard-alumno.page.scss'],

})
export class DashboardAlumnoPage implements OnInit {

  data: Usuario;

  constructor(private activeroute: ActivatedRoute, private router: Router,
    private animationCtrl: AnimationController, private db: DbService) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });

  }

  ngOnInit() {
    this.animationCtrl.create()
      .addElement(document.querySelector('#bienvenida'))
      .duration(800)
      .keyframes([
        { offset: 0.50, 'transform': 'scale(1.05)' },
        { offset: 1, 'transform': 'translate(0px)' },
      ])
      .iterations(Infinity)
      .play()
  }


  // Función que cambia el estado de sesión actual a no activo:
  
  cerrarSesion() {
    this.db.cerrarSesion(
      this.data.id_usuario
    ).then((res) => {
      this.db.sesionActual = res;
      this.router.navigate(['/home']);
    })
  }
}
