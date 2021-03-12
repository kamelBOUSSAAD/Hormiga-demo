import { Component } from '@angular/core';
import {UserseviceService} from './service/usersevice.service'

@Component({
  selector: 'amine-app',
  templateUrl: './amine.app.component.html',
  styleUrls: ['./amine.app.component.css']
})
export class AmineAppComponent { 
  constructor(private userservice : UserseviceService){}
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'email'];
  dataSource = this.userservice.ELEMENT_DATA;
}