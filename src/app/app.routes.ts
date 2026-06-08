import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'kondicionieru-uzpilde-riga',
    loadComponent: () =>
      import('./pages/kondicionieru-uzpilde-riga/kondicionieru-uzpilde-riga.component').then(
        m => m.KondicioneruUzpildeRigaComponent
      ),
  },
];
