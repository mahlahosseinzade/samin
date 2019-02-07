import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../app.component';
import { STUDENT } from '../app.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {

  @Input() appcomponent: Student;
  @Input() STUDENT;
@Input() ngmodul:string;
studentes=STUDENT
  sd(str){
    console.log('in app table ---', str)
  }

  constructor() { }
  Order(x) {
    this.STUDENT.sort(function (a, b) {
      if (x == 'fname') {
        var str1 = a.name;
        var str2 = b.name;
      }
      else {
        var str1 = a.family;
        var str2 = b.family;
      }
      return (str1.localeCompare(str2));
    });
  }
  Orderavg() {
    this.STUDENT.sort(function (a, b) { return (a.avg - b.avg); });
  }
  ngOnInit() {
  }
}
