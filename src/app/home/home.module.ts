import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule, HomeRoutingModule, FormsModule
  ],
})
export class HomeModule { }