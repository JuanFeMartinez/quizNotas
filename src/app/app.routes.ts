import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'materias',
    loadComponent: () => import('./materias/materias.page').then( m => m.MateriasPage)
  },
  {
    path: 'notas',
    loadComponent: () => import('./notas/notas.page').then( m => m.NotasPage)
  },
  {
    path: 'semestres',
    loadComponent: () => import('./semestres/semestre.page').then( m => m.SemestrePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
