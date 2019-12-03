import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'msjexitoso', loadChildren: './msjexitoso/msjexitoso.module#MsjexitosoPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'inscripcion', loadChildren: './inscripcion/inscripcion.module#InscripcionPageModule' },
  { path: 'mjsinsexit', loadChildren: './mjsinsexit/mjsinsexit.module#MjsinsexitPageModule' },
  { path: 'logo', loadChildren: './logo/logo.module#LogoPageModule' },  { path: 'pagos', loadChildren: './pagos/pagos.module#PagosPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
