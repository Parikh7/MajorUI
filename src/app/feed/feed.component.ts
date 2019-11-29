import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
QueryForm: FormGroup;
  subjects: any;
  userdata:any;
  comments: string;
  count: number;
 feed  = [];
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private route: ActivatedRoute) { }



  onSubmit(){
  console.log(this.QueryForm.value);
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


  getusers(){
    return this.http.get("http://localhost:3000/users");
  }
  getSubjects(){
    return this.http.get("http://localhost:3000/tags");
  }
  ngOnInit() {
  this.QueryForm = this.formBuilder.group({
                  update: '',
              });
  var user=this.route.snapshot.paramMap.get('id');
  this.getTags(user);
  this.getusers();
  }


  getTags(user){
  this.getusers().subscribe(data=>{
    const arr = Object.values(data);

    arr.forEach(users=>{
    if(users.username==user){
    this.userdata=users;

   if(this.userdata){
    this.subjects=this.userdata.tags;
      this.getSubjects().subscribe(data=>{
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
        console.log(this.feed);
      })

    }
    }
  });
  }

  );

}
}
