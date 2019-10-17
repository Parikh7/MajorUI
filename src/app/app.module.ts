import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaurdComponent } from './gaurd/gaurd.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {LoginValidator} from './Validators/LoginValidator'

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    GaurdComponent,
    LoginComponent,
    HomeComponent
    //LoginValidator
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
