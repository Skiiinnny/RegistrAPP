import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sesionActual: Usuario;
  

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }
  
  dbState() {
    return this.isDbReady.asObservable();
  }

  // Generación de "base de datos" desde archivo SQL:

  getFakeData() {
    this.httpClient.get(
      'assets/database.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Función para consultar credenciales de usuario:

  iniciarSesion(usuario, clave): Promise<Usuario> {
    return this.storage.executeSql('SELECT * FROM usuario WHERE cuenta_usuario = ? AND clave_usuario = ?', [usuario, clave]).then(res => { 
      return {
        id_usuario: res.rows.item(0).id_usuario,
        cuenta_usuario: res.rows.item(0).cuenta_usuario,
        clave_usuario: res.rows.item(0).clave_usuario,
        tipo_usuario: res.rows.item(0).tipo_usuario,
        nombre_usuario: res.rows.item(0).nombre_usuario,
        apellido_usuario: res.rows.item(0).apellido_usuario,
        activo: 1
      }
    });
  }

  // Función para cerrar sesión:

  cerrarSesion(id){
    return this.storage.executeSql('SELECT * FROM usuario WHERE id_usuario = ?', [id]).then(res => { 
      return {
        id_usuario: res.rows.item(0).id_usuario,
        cuenta_usuario: res.rows.item(0).cuenta_usuario,
        clave_usuario: res.rows.item(0).clave_usuario,
        tipo_usuario: res.rows.item(0).tipo_usuario,
        nombre_usuario: res.rows.item(0).nombre_usuario,
        apellido_usuario: res.rows.item(0).apellido_usuario,
        activo: 0
      }
    });
  }

}