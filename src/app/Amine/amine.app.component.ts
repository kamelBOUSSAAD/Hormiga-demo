import { Component } from '@angular/core';
import {UserseviceService} from './service/usersevice.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { NewuserComponent } from './newuser/newuser.component';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'amine-app',
  templateUrl: './amine.app.component.html',
  styleUrls: ['./amine.app.component.css']
})
export class AmineAppComponent { 
  constructor(private userservice : UserseviceService,private dialog:MatDialog){}
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'email','actions'];
  dataSource =  new MatTableDataSource( this.userservice.ELEMENT_DATA);
  oncreate(){
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = true;
    DialogConfig.autoFocus = true;
    DialogConfig.width ="60%";
    this.dialog.open(NewuserComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}