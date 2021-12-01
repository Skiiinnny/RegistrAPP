import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthAlumnoGuard } from './guards/auth-alumno.guard';
import { AuthDocenteGuard } from './guards/auth-docente.guard';

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
    loadChildren: () => import('./dashboard-alumno/dashboard-alumno.module').then( m => m.DashboardAlumnoPageModule),
    canLoad: [AuthAlumnoGuard]
  },
  {
    path: 'dashboard-profesor',
    loadChildren: () => import('./dashboard-profesor/dashboard-profesor.module').then( m => m.DashboardProfesorPageModule),
    canLoad: [AuthDocenteGuard]
  },
  {
    path: 'activate-qr',
    loadChildren: () => import('./activate-qr/activate-qr.module').then( m => m.ActivateQrPageModule),
    canLoad: [AuthDocenteGuard]
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./scan-qr/scan-qr.module').then( m => m.ScanQrPageModule),
    canLoad: [AuthAlumnoGuard]
  },
  {
    path: 'recovery',
    loadChildren: () => import('./recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
