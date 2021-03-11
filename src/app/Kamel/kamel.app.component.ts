import { Component } from '@angular/core';

@Component({
  selector: 'kamel-app',
  templateUrl: './kamel.app.component.html',
  styleUrls: ['./kamel.app.component.css']
})
export class KamelAppComponent {
    // Set our map properties
    mapCenter = [10.181667, 36.806389];
    basemapType = 'satellite';
    mapZoomLevel = 6;
  
    // See app.component.html
    mapLoadedEvent(status: boolean) {
      console.log('The map loaded: ' + status);
    }
 }
