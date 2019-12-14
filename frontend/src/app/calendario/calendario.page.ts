import { Component, OnInit } from '@angular/Core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgCalendarModule  } from 'ionic2-calendar';


export class CalendarioPage implements OnInit {

  constructor(private commonModule: CommonModule,
              private ionicModule: IonicModule,
              private formsModule: FormsModule,
              private routerModule: RouterModule,
              private ngCalendarModule: NgCalendarModule
    ) { }

  ngOnInit() {
  }

}
