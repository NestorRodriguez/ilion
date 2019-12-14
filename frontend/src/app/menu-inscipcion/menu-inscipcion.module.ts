import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuInscipcionPage } from './menu-inscipcion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuInscipcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuInscipcionPage]
})
export class MenuInscipcionPageModule {}
