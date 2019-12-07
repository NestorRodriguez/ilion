import { Component, OnInit } from '@angular/core';
import { ilionService } from '../servicios/ilion.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public  email: string;
  public password: string;

  constructor(private servicio:ilionService,private navControl: NavController, private route: ActivatedRoute) {}

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


 
}
