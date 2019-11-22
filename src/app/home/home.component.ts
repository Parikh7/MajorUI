import { Component, Input,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import TempDatabase from '../TempDatabase.json'
import { DomSanitizer } from '@angular/platform-browser';
import  _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsFeed: boolean;
  registration:boolean;
  profile:boolean;
  subjects:boolean;
  userData: {};
  username: string;
  try: any;
  try2:any

  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  this.newsFeed=true;
  this.try=localStorage.getItem("token");
  this._sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64"+this.try);
   localStorage.clear();

    this.username=this.route.snapshot.paramMap.get('id');
    this.FetchTheDetails(this.username);
  }


  FetchTheDetails(username){
    for(let i=0;i<TempDatabase.length;i++){
          if(_.isEqual(TempDatabase[i].username,username)){
            this.userData=TempDatabase[i];
            if(this.try){
            TempDatabase[i]["image"]=this.try;
            }
            //TempDatabase[i]=this.userData;
        }

  }
  console.log(this.userData);
  }
  ViewReg(data){
  this.profile=false;
  this.newsFeed=false;
  this.registration=true;
  this.subjects=false;
  }
  ViewProf(data){
  this.newsFeed=false;
  this.registration=false;
  this.profile=true;
  this.subjects=false;
  }
  ViewHome(data){
  this.newsFeed=true;
    this.registration=false;
    this.profile=false;
    this.subjects=false;
  }
  ViewSub(data){
    this.newsFeed=false;
      this.registration=false;
      this.profile=false;
      this.subjects=true;
  }

  AfterViewInit(){
  }
  changeListener($event){

      var file:File=$event.target.files[0];
      var myReader:FileReader = new FileReader();

      myReader.readAsDataURL(file);
      myReader.onloadend = (e) => {
           this.fun(myReader.result);
        }
      }
      fun(i){
      var foo=i;
      localStorage.setItem("token", foo);
      location.reload();
      }

}
