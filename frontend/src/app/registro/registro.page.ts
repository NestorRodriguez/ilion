import { Component, OnInit } from '@angular/core';
import {ilionService} from '../servicios/ilion.service';


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
  public id_rol= '1';
  constructor(private servicio: ilionService) { }

  ngOnInit() {
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
    this.servicio.setUsuario(data).subscribe(response => {
      console.log(response);
    });
  }

}
