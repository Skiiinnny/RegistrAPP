import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  user = {nombre: "", clave: ""}

  constructor(private router: Router) {}

  login(){
    let navigationExtras: NavigationExtras = {
      state: {user: this.user}
      };
      this.router.navigate(['/dashboard-alumno'],navigationExtras);      
  }

  ngOnInit(){
  }
}
