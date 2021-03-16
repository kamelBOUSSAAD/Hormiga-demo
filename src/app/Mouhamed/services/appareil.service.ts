export class AppareilService {
    appareils =[
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allume'
        },
        {
          name: 'Television',
          status: 'éteint'
        }
      ];
      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allume';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
    }
}
