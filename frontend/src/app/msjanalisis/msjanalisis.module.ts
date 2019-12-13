import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MsjanalisisPage } from './msjanalisis.page';

const routes: Routes = [
  {
    path: '',
    component: MsjanalisisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MsjanalisisPage]
})
export class MsjanalisisPageModule {}
