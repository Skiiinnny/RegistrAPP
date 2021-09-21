import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-profesor',
  templateUrl: './dashboard-profesor.page.html',
  styleUrls: ['./dashboard-profesor.page.scss'],
})
export class DashboardProfesorPage implements OnInit {

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router,
    private animationCtrl: AnimationController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }
    });

  }

  ngOnInit() {
    this.animationCtrl.create()
    .addElement(document.querySelector('#bienvenida'))
    .duration(800)
    .keyframes([
      {offset: 0.50, 'transform': 'scale(1.05)'},
      {offset: 1, 'transform': 'translate(0px)'},
    ])
    .iterations(Infinity)
    .play()
  }

}
