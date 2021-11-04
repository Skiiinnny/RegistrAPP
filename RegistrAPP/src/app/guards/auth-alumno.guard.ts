import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from '../services/db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAlumnoGuard implements CanLoad {
  constructor(private router: Router, private db: DbService){}

  canLoad(){
    if (this.db.sesionActual.activo == 1 && this.db.sesionActual.tipo_usuario == 1){
      return true;}
    else{
      this.router.navigate(['home/'])
      return false
    }
  }
}
