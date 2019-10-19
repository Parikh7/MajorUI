import { Component, Input,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import TempDatabase from '../TempDatabase.json'
import  _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: {};
  username: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username=this.route.snapshot.paramMap.get('id');
    this.FetchTheDetails(this.username);
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

}
