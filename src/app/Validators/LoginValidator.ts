import { Injectable } from '@angular/core';
import TempDatabase from '../TempDatabase.json'
import { Component, OnInit } from '@angular/core';
import  _ from 'lodash';


@Injectable({
  providedIn: 'root',
})
export class LoginValidator{
username:string;
password: string;
validator=false;
  constructor(){
  }
  Validation(Details){

   this.username=Details.username;

    for(let i=0;i<TempDatabase.length;i++){
      if(_.isEqual(TempDatabase[i].username,Details.username)&&_.isEqual(TempDatabase[i].password,Details.password)){
        return true;
    }
}
 return false;
}
}
