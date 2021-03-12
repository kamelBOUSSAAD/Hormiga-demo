import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material-module';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, AboutComponent],
  exports: [HomeComponent,HeaderComponent,AboutComponent],
  imports: [
    CommonModule,
    MaterialModule,
  
  ]
})
export class NawfelAppModule { }
