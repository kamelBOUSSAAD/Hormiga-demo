import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AamlAppComponent } from './Amal/amal.app.component';
import { AmineAppComponent } from './Amine/amine.app.component';
import { NawfelAppComponent } from './Nawfel/nawfel.app.component';
import { MarwenAppComponent } from './Marwen/marwen.app.component';
import { MouhamedAppComponent } from './Mouhamed/mouhamed.app.component';


import { KamelAppComponent } from "./kamel/kamel.app.component";
import { EsriMapComponent } from "./kamel/esri-map/esri-map.component";
import { NawfelAppModule } from "./Nawfel/nawfel-app.module";
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from "./Amal/card/card.component";


import { NewuserComponent } from './Amine/newuser/newuser.component';

import { AppareilComponent } from './Mouhamed/appareil/appareil.component';
import { AppareilService } from './Mouhamed/services/appareil.service';

const appRoutes: Routes = [
  { path: 'amine', component: AmineAppComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    KamelAppComponent,
    EsriMapComponent,
    AamlAppComponent,
    AmineAppComponent,
    NawfelAppComponent,
    MarwenAppComponent,
    MouhamedAppComponent,
    CardComponent,
    AppareilComponent,
    NewuserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NawfelAppModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [AppComponent, KamelAppComponent, NewuserComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
