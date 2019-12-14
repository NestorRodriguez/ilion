import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuEstadisticasPage } from './menu-estadisticas.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEstadisticasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuEstadisticasPage]
})
export class MenuEstadisticasPageModule {}
