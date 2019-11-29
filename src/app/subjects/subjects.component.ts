import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  panelOpenState = false;
  subs=[
  {"CourseCode":"CSN 101","Info":"test"},{},{}
  ];
  constructor() { }

  ngOnInit() {

  }

}
