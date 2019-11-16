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
  userData: {};
  username: string;
  try: any;
  try2:any

  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  this.try=localStorage.getItem("token");
  this._sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64"+this.try);
   localStorage.clear();
    this.username=this.route.snapshot.paramMap.get('id');
    this.FetchTheDetails(this.username);
  }
  dataURItoBlob(dataURI){
  const byteString = window.atob(dataURI);
     const arrayBuffer = new ArrayBuffer(byteString.length);
     const int8Array = new Uint8Array(arrayBuffer);
     for (let i = 0; i < byteString.length; i++) {
       int8Array[i] = byteString.charCodeAt(i);
     }
     const blob = new Blob([int8Array], { type: 'image/jpeg' });
     return blob;
  }


  FetchTheDetails(username){
    for(let i=0;i<TempDatabase.length;i++){
          if(_.isEqual(TempDatabase[i].username,username)){
            this.userData=TempDatabase[i];
        }

  }
  console.log(this.userData);
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
      console.log(i);
      localStorage.setItem("token", foo);
      location.reload();
      }

}
