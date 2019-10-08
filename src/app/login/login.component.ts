import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import TempDatabase from '../TempDatabase.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    valid = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder
        ){}

    ngOnInit() {
    this.loginForm = this.formBuilder.group({
                username: '',
                password: ''
            });
    }


    onSubmit() {
        this.submitted = true;
        console.log(this.loginForm.value,TempDatabase);
    }
}
