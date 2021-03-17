import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string; 
  @Input() appareilStatus: string;

  isAuth = false;
  appareils =[
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'Television',
      status: 'allumer'
    }
  ]

  onAllumer(){
    return this.appareilStatus = 'allumer'
  }

  onEteindre(){
    return this.appareilStatus = 'éteint'
  }

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  getStatus(){
    return this.appareilStatus;
  }


  getColor() {
    if(this.appareilStatus === 'allumer') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}

}
