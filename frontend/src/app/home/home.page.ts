import { Component, OnInit } from '@angular/core';
import { ilionService } from '../servicios/ilion.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { NavController, LoadingController,AlertController } from '@ionic/angular';
import { isNull } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public  email: string;
  public password: string;
  items: any = [];
  constructor(private alertController: AlertController,
    private loadingCtrl: LoadingController,
     private servicio:ilionService,
     private navControl: NavController,
      private route: ActivatedRoute) {}

  ngOnInit() {
    this.email = '';
    this.password = '';
    }

  getLogin() {
  this.servicio.getLogin(this.email,this.password).subscribe(response => {
    console.log(response);
    this.ngOnInit();
  });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Por favor diligencie todos los campos para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentinvalido() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña invalido',
      buttons: ['OK']
    });
    this.email = '';
    this.password = '';
    await alert.present();
  }

  public async login( forma: NgForm ) {
    if (forma.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles'
      });
      loading.present();
      loading.dismiss();
      this.servicio.getLogin(this.email, this.password).subscribe(data => {
        console.log(data);
        if ( isNull(data)) {
          this.presentinvalido();
        } else {
        console.log(this.items);
        this.navControl.navigateRoot('menu'); }
      });
    } else {
      this.presentAlert();
    }
  }
 
}
