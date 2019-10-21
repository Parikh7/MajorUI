import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {LoginValidator} from '../Validators/LoginValidator'
import { CommonModule } from '@angular/common';
import TempDatabase from '../TempDatabase.json';
import 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    valid = false;
    submitted = false;
    returnUrl: string;
    username: string;
    Success=false;
    errorMessage = "Sorry!Invalid password or username. Please check again."
    constructor(
        private formBuilder: FormBuilder,private ValidationService: LoginValidator,private _router:Router
        ){}

    ngOnInit() {
    this.loginForm = this.formBuilder.group({
                username: '',
                password: ''
            });
    }

  Redirect(bool){
  \
    if(bool){
      this.username=bool//This is temporary, will fix it latter
      this.Success=true;
      this._router.navigate(['/home',bool]);
    }
    else{

    }

  }
    onSubmit() {
        this.submitted = true;
        console.log(this.ValidationService.Validation(this.loginForm.value));
        this.Redirect(this.ValidationService.Validation(this.loginForm.value));

    }
}
