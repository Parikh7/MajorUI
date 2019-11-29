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
import {MatIconModule}  from "@angular/material";
import { FeedComponent } from './feed/feed.component'
import {MatCardModule} from '@angular/material/card';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from './navbar/DialogOverviewExampleDialog'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    GaurdComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FeedComponent,
    RegistrationComponent,
    ProfileComponent,
    SubjectsComponent,
    DialogOverviewExampleDialog
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
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule,
   MatDialogModule,
   MatExpansionModule
  ],
  entryComponents: [
  DialogOverviewExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
