import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaurdComponent } from './gaurd/gaurd.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {LoginValidator} from './Validators/LoginValidator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from "@angular/material";
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule}  from "@angular/material"

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    GaurdComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
    //LoginValidator
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
