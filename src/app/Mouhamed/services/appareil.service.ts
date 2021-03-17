export class AppareilService {
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
      ];
      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumer';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
    }
}
