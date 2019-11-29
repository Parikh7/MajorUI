import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  panelOpenState = false;
  comments: string;
  count: number;
  subjects: any;
   userdata:any;
   feed  = [];
  subs=[
  ];
  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  fetchSubjects(){
    return this.http.get("http://localhost:3000/tags");
  }
  receiveComment($event) {
        this.comments = $event;
        this.count = this.comments.length;
        console.log(this.comments.length);
      }
      recieveCount($event) {
        this.comments = $event;
        this.count = this.comments.length;
      }
  ngOnInit() {
      var user=this.route.snapshot.paramMap.get('id');
      this.getTags(user);
  }
  getusers(){
      return this.http.get("http://localhost:3000/users");
    }
  getTags(user){
    this.getusers().subscribe(data=>{
      const arr = Object.values(data);

      arr.forEach(users=>{
      if(users.username==user){
      this.userdata=users;

     if(this.userdata){
      this.subjects=this.userdata.subjects;
        this.fetchSubjects().subscribe(data=>{
        var arr = Object.values(data);
        arr=arr[0];
        var values=Object.keys(arr);
        const arr2=this.subjects;
        console.log(this.subjects,values);
        var result=values.filter(function (o){ return arr2.indexOf(o) > -1;})
         result.forEach(val=>{
         const update=Array(arr[val]);
         this.feed.push({val,update});
         });
        })
        console.log(this.feed);
      }
      }
    });
    }
    );
    }

}
