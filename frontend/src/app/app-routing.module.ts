import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'logo', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'msjexitoso', loadChildren: './msjexitoso/msjexitoso.module#MsjexitosoPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'inscripcion', loadChildren: './inscripcion/inscripcion.module#InscripcionPageModule' },
  { path: 'mjsinsexit', loadChildren: './mjsinsexit/mjsinsexit.module#MjsinsexitPageModule' },
  { path: 'logo', loadChildren: './logo/logo.module#LogoPageModule' },
  { path: 'pagos', loadChildren: './pagos/pagos.module#PagosPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'vartip1', loadChildren: './vartip1/vartip1.module#Vartip1PageModule' },
  { path: 'vartip2', loadChildren: './vartip2/vartip2.module#Vartip2PageModule' },
  { path: 'msjanalisis', loadChildren: './msjanalisis/msjanalisis.module#MsjanalisisPageModule' },
  { path: 'analisis', loadChildren: './analisis/analisis.module#AnalisisPageModule' },
  { path: 'resumeninscrip', loadChildren: './resumeninscrip/resumeninscrip.module#ResumeninscripPageModule' },
  { path: 'menu-estadisticas', loadChildren: './menu-estadisticas/menu-estadisticas.module#MenuEstadisticasPageModule' },
  { path: 'nutricion', loadChildren: './nutricion/nutricion.module#NutricionPageModule' },
  { path: 'posicion', loadChildren: './posicion/posicion.module#PosicionPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
