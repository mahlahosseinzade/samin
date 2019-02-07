import { Component ,Input} from '@angular/core';

export class Student {
  name: string;
  family: string;
  avg: number;
}
export const STUDENT: Student[] =[
  { name: 'علی', family: 'خباز', avg: 18 },
  { name: 'هدیه', family: 'حسینیان', avg: 19 },
  { name: 'مریم', family: 'بنه', avg: 17 },
  { name: 'مهلا', family: 'حسین زاده', avg: 19 },
  { name: 'ملیکا', family: 'شجاعی', avg: 18 },
  { name: 'الهه', family: 'گوگساز', avg: 14 },
  { name: 'اصغر', family: 'فلاح', avg: 18 },
  { name: 'فریبا', family: 'نوحی', avg: 20 },
  { name: 'حسن', family: 'روحانی', avg: 3 },
  { name: 'سردار', family: 'آزمون', avg: 16 },
  { name: 'پویا', family: 'بیاتی', avg: 11 }
];
 //<app-navigation [masterArray]="masterArray"></app-navigation>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'samin';
  ArrStudents =STUDENT;
  NewStudents:Student[];
  str;
  searchEvent($event) {
    this.str = $event;
  }
  search(str) {
    
    console.log('in app component ---', str);
    if (!this.str)
      return (this.NewStudents = this.ArrStudents)
      
    else {
      for (const item of this.ArrStudents) {
        if (item.name.match(this.str)) {

          this.NewStudents.push(item);
          console.log('in component ---', this.NewStudents);
        } else {
          if (item.family.match(this.str)) {
            this.NewStudents.push(item);
          }
        }
      } return this.NewStudents;
    }
  }
}