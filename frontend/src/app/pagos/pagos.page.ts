import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {
  enlace = '';
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: only-arrow-functions
  abrirNequi() {
    window.open('https://recarga.nequi.com.co/bdigitalpsl/#!/', '_system', 'location=yes');
  }

  abrirDaviPlata() {
    window.open('https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=2508', '_system', 'location=yes');
  }
}
