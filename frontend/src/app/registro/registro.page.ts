import { Component, OnInit } from '@angular/core';
import { ilionService } from '../servicios/ilion.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public nombre: string;
  public email: string;
  public id_ident: string;
  public num_ident: string;
  public password: string;
  public id_rol = '1';
  public resultado: string;
  constructor(private servicio: ilionService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private navControl: NavController ) { }

  ngOnInit() {
    this.nombre = '';
    this.email = '';
    this.id_ident = '';
    this.num_ident = '';
    this.password = '';
    this.id_rol = '';
  }

  saveForm() {
    const data = {
      nombre: this.nombre,
      email: this.email,
      id_ident: this.id_ident,
      num_ident: this.num_ident,
      contraseña: this.password,
      id_rol: this.id_rol
    };
    console.log(data);
    this.servicio.setUsuario(data)
      .subscribe(
        response => {
          console.log(response);
          let json = JSON.parse(JSON.stringify(response));
          this.resultado = json.contenido.Post_usuario.Error;
          if (this.resultado === 'Se agrego Exitosamente') {
            this.presentAlertExito();
            this.navControl.navigateRoot('home');
          } else {
            this.presentAlertError();
            this.ngOnInit();
          }
        },
        error => console.log(error)
      );
  }


  async presentAlertExito() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Se agrego Exitosamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Validar los datos ingresados',
      buttons: ['OK']
    });

    await alert.present();
  }
}
