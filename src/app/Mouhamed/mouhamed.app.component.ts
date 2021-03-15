import { Component } from '@angular/core';

@Component({
  selector: 'mouhamed-app',
  templateUrl: './mouhamed.app.component.html',
  styleUrls: ['./mouhamed.app.component.css']
})
export class MouhamedAppComponent {
  isAuth = false;
  appareils =[
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumer'
    },
    {
      name: 'Television',
      status: 'éteint'
    }
  ] 
 }