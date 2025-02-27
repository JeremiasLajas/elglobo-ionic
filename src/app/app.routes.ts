import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista-socios',
    loadComponent: () => import('./socios/lista-socios/lista-socios.page').then( m => m.ListaSociosPage)
  },
  {
    path: 'registro/:id',
    loadComponent: () => import('./socios/registro-socio/registro-socio.page').then( m => m.RegistroSocioPage)
  },
  {
    path: 'lista-actividades',
    loadComponent: () => import('./actividades/lista-actividades/lista-actividades.page').then( m => m.ListaActividadesPage)
  },
  {
    path: 'registro-actividad/:id',
    loadComponent: () => import('./actividades/registro-actividad/registro-actividad.page').then( m => m.RegistroActividadPage)
  },
];
