import { Component, OnInit } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(private calendar: Calendar,public navCtrl:NavController,private plt:Platform) {
    this.plt.ready().then(()=>{
      this.calendar.listCalendars().then( data=>{
        this.calendar = data;
      })
    })
   }

  ngOnInit() {
  }

  addEvent(cal){
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicAcademy.com',firtReminderMinutes:15  }
    this.calendar.createEventInteractivelyWithOptions('Nuevo Evento','SEO','Notas',date,date,options).then(()=>{});
  }

  openCal(cal){
    this.navCtrl.push('cal-details',{ name: cal.name});
  }


}
