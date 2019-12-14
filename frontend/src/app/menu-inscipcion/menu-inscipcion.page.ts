import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ilionService } from '../servicios/ilion.service';
@Component({
  selector: 'app-menu-inscipcion',
  templateUrl: './menu-inscipcion.page.html',
  styleUrls: ['./menu-inscipcion.page.scss'],
})
export class MenuInscipcionPage implements OnInit {
  estadoActual: any = [];
  errorMessage = '';
  id: string;
  constructor(private navControl: NavController, private route: ActivatedRoute, private servicio: ilionService) { }

  ngOnInit() {
    this.getEstadoActual();
  }

  getEstadoActual() {
    this.servicio.getDatos_jugador().subscribe(
      estadoActual => {
        console.log(estadoActual);
        let json = JSON.parse(JSON.stringify(estadoActual));
        this.estadoActual = json.contenido.Get_datos_jugaro;
      }, error => this.errorMessage = error);
  }

  editForm(id: string) {
    this.navControl.navigateForward(`incripcion-details/${id}`);
    this.ngOnInit();
  }

  deleteForm(id: string) {
    this.id = id;
    this.servicio.deleteDatos_jugador(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    });
  }

  saveForm() {
    this.navControl.navigateRoot('/inscripcion');
  }
}
