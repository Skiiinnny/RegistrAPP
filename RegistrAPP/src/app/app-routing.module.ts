import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardAlumnoPage } from './dashboard-alumno/dashboard-alumno.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
 
  {
    path: 'dashboard-alumno',
    component : DashboardAlumnoPage,
    loadChildren: () => import('./dashboard-alumno/dashboard-alumno.module').then( m => m.DashboardAlumnoPageModule)
  },
  {
    path: 'dashboard-profesor',
    loadChildren: () => import('./dashboard-profesor/dashboard-profesor.module').then( m => m.DashboardProfesorPageModule)
  },
  {
    path: 'activate-qr',
    loadChildren: () => import('./activate-qr/activate-qr.module').then( m => m.ActivateQrPageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./scan-qr/scan-qr.module').then( m => m.ScanQrPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
