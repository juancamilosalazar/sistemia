import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Sistemia | Soluciones tecnológicas a la medida',
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios').then(m => m.Servicios),
    title: 'Sistemia | Nuestros Servicios',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto),
    title: 'Sistemia | Contáctanos',
  },
  { path: '**', redirectTo: '' },
];
