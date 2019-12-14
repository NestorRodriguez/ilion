import { Component, OnInit } from '@angular/core';
import { ilionService } from '../servicios/ilion.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { isNull } from 'util';

@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.page.html',
  styleUrls: ['./nutricion.page.scss'],
})
export class NutricionPage implements OnInit {
public peso: any;
public estatura: any;
  constructor(private alertController: AlertController,
              private loadingCtrl: LoadingController,
              private servicio: ilionService,
              private navControl: NavController,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.peso = '';
    this.estatura = '';
  }


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'Por favor diligencie todos los campos para continuar',
    buttons: ['OK']
  });

  await alert.present();
  this.ngOnInit();
}

async presentinObeso() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    message: 'Nivel de peso Obeso',
    buttons: ['OK']
  });
  await alert.present();
  this.ngOnInit();
}

async presentinSobrepeso() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    message: 'Nivel de peso Sobre Peso',
    buttons: ['OK']
  });
  await alert.present();
  this.ngOnInit();
}
async presentinNormal() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    message: 'Nivel de peso Normal',
    buttons: ['OK']
  });
  await alert.present();
  this.ngOnInit();
}
async presentinBajopeso() {
  const alert = await this.alertController.create({
    header: 'Alerta',
    message: 'Nivel de peso Bajo Peso',
    buttons: ['OK']
  });
  await alert.present();
}
public async Operacion( forma: NgForm ) {
  if (forma.valid) {
    const loading = await this.loadingCtrl.create({
      message: 'Validando...',
      spinner: 'bubbles'
    });
    loading.present();
    loading.dismiss();
     // tslint:disable-next-line: no-unused-expression
    const mci = this.peso / this.estatura ** 2;
    if (mci > 18.5) {
      if (mci >= 25 ) {
        if (mci >= 30) {
          this.presentinObeso();
        } else {
          this.presentinSobrepeso();
        }
      } else {
        this.presentinNormal();
      }

    } else {
this.presentinBajopeso();
    }
    console.log(mci);
  } else {
    this.presentAlert();
  }
}

}
