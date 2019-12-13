import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {
  public nombre_jugaro: string;
  public fecha_nacimiento: string;
  public lugar: string;
  public documento_identidad: string;
  public tipo_documento: string;
  public genero: string;
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
  public pie_habil: string;
  public institucion: string;
  public grado: string;
  public eps: string;
  public prepagada: string;
  public sisben: string;
  public otra_clinica: string;
  public pregunta1: string;
  public pregunta2: string;
  public pregunta3: string;
  public id_registro: string;
  
  constructor() { }

  ngOnInit() {
  }

}
