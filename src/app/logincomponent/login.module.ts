import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogincomponentComponent } from './logincomponent.component';
import { LoginRoutingModule } from './login.routing';


@NgModule({
  declarations: [
    LogincomponentComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule
  ],
})
export class LoginModule { }