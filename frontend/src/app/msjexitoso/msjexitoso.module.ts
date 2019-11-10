import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MsjexitosoPage } from './msjexitoso.page';

const routes: Routes = [
  {
    path: '',
    component: MsjexitosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MsjexitosoPage]
})
export class MsjexitosoPageModule {}
