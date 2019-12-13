import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResumeninscripPage } from './resumeninscrip.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeninscripPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResumeninscripPage]
})
export class ResumeninscripPageModule {}
