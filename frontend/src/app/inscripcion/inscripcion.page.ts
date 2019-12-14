import { Component, OnInit } from '@angular/core';
import { ilionService } from '../servicios/ilion.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {
  // tslint:disable-next-line: variable-name
  public nombre_jugaro: string;
  // tslint:disable-next-line: variable-name
  public fecha_nacimiento: string;
  public lugar: string;
  // tslint:disable-next-line: variable-name
  public documento_identidad: string;
  // tslint:disable-next-line: variable-name
  public tipo_documento: string;
  public genero: string;
  // tslint:disable-next-line: variable-name
  public direccion_residencia: string;
  public barrio: string;
  public telefono: string;
  public celular: string;
  public email: string;
  public whatsapp: string;
  public edad: string;
  public peso: string;
  public estatura: string;
  public talla: string;
  public rh: string;
  // tslint:disable-next-line: variable-name
  public pie_habil: string;
  public institucion: string;
  public grado: string;
  public eps: string;
  public prepagada: string;
  public sisben: string;
  // tslint:disable-next-line: variable-name
  public otra_clinica: string;
  public pregunta1: string;
  public pregunta2: string;
  public pregunta3: string;
  // tslint:disable-next-line: variable-name
  public id_registro = '4';
  public resultado: string;
  constructor(private servicio: ilionService,
              private alertController: AlertController,
              private loadingCtrl: LoadingController,
              private navControl: NavController) { }

  ngOnInit() {
  }

  saveForm() {
    const data = {
  nombre_jugaro:  this.nombre_jugaro,
  fecha_nacimiento:  this.fecha_nacimiento,
  lugar:  this.lugar,
  documento_identidad:  this.documento_identidad,
  tipo_documento:  this.tipo_documento,
  genero:  this.genero,
  direccion_residencia:  this.direccion_residencia,
 barrio:  this.barrio,
 telefono:  this.telefono,
 celular:  this.celular,
 email:  this.email,
 whatsapp:  this.whatsapp,
 edad:  this.edad,
 peso:  this.peso,
 estatura:  this.estatura,
 talla:  this.talla,
 rh:  this.rh,
 pie_habil:  this.pie_habil,
 institucion:  this.institucion,
 grado:  this.grado,
 eps:  this.eps,
 prepagada:  this.prepagada,
 sisben:  this.sisben,
 otra_clinica:  this.otra_clinica,
 pregunta1:  this.pregunta1,
 pregunta2:  this.pregunta2,
 pregunta3:  this.pregunta3,
 id_registro:  this.id_registro
    };
    console.log(data);
    this.servicio.setDatos_jugador(data)
      .subscribe(
        response => {
          console.log(response);
          let json = JSON.parse(JSON.stringify(response));
          this.resultado = json.contenido.Post_datos_jugador.Error;
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
