import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'mouhamed-app',
  templateUrl: './mouhamed.app.component.html',
  styleUrls: ['./mouhamed.app.component.css']
})
export class MouhamedAppComponent {
  isAuth = false;
  appareils: any[];
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
}
}