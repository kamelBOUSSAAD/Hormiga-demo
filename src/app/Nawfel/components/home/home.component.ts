import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  showNotes: boolean = false;
  

  toggleNotes(): void {
    this.showNotes = ! this.showNotes;
  }
 

  ngOnInit(): void {
  }

}
