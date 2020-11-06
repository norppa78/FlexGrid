import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  users = [{
    id: 1,
    first_name: "Sophronia",
    last_name: "Sercombe",
    role: "teacher"
  }, {
    id: 2,
    first_name: "Brendis",
    last_name: "Warlow",
    role: "student"
  }, {
    id: 3,
    first_name: "Morten",
    last_name: "Browett",
    role: "student"
  }, {
    id: 4,
    first_name: "Robbie",
    last_name: "Starking",
    role: "teacher"
  }, {
    id: 5,
    first_name: "Genny",
    last_name: "Feld",
    role: "pupil"
  }, {
    id: 6,
    first_name: "Jethro",
    last_name: "Dumberell",
    role: "pupil"
  }, {
    id: 7,
    first_name: "Maddie",
    last_name: "Hansford",
    role: "student"
  }, {
    id: 8,
    first_name: "Win",
    last_name: "Dabbs",
    role: "pupil"
  }, {
    id: 9,
    first_name: "Russ",
    last_name: "Keford",
    role: "student"
  }, {
    id: 10,
    first_name: "Blair",
    last_name: "Kuhnert",
    role: "teacher"
  }];

  constructor() { }

  ngOnInit() {
  }

}
