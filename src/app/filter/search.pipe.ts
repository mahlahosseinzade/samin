import { Pipe, PipeTransform } from '@angular/core';
import { STUDENT } from '../student';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {

  transform(students: any, searchText: any): any {
    if (searchText == null) return students;
    return students.filter(function (search) {
      return (search.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) ||
        (search.family.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    })
  }

}
