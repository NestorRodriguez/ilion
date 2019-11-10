import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MjsinsexitPage } from './mjsinsexit.page';

const routes: Routes = [
  {
    path: '',
    component: MjsinsexitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MjsinsexitPage]
})
export class MjsinsexitPageModule {}
