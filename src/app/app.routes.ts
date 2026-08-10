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
  {
    path: 'ritenu-savirze-riga',
    loadComponent: () =>
      import('./pages/ritenu-savirze-riga/ritenu-savirze-riga.component').then(
        m => m.RitenuSavirzeRigaComponent
      ),
  },
  {
    path: 'ta-sagatavosana-riga',
    loadComponent: () =>
      import('./pages/ta-sagatavosana-riga/ta-sagatavosana-riga.component').then(
        m => m.TaSagatavosanaRigaComponent
      ),
  },
  {
    path: 'auto-pardosanas-serviss-riga',
    loadComponent: () =>
      import('./pages/auto-pardosanas-serviss-riga/auto-pardosanas-serviss-riga.component').then(
        m => m.AutoPardosanasServissRigaComponent
      ),
  },
  {
    path: 'amerikas-auto-detalas-riga',
    loadComponent: () =>
      import('./pages/amerikas-auto-detalas-riga/amerikas-auto-detalas-riga.component').then(
        m => m.AmerikasAutoDetalasRigaComponent
      ),
  },
  {
    path: 'amerikas-auto-registracija-sertifikacija-riga',
    loadComponent: () =>
      import('./pages/amerikas-auto-registracija-sertifikacija-riga/amerikas-auto-registracija-sertifikacija-riga.component').then(
        m => m.AmerikasAutoRegistracijaSertifikacijaRigaComponent
      ),
  },
];
